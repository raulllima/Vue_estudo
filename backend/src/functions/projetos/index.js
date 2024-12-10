const sqlite3 = require('sqlite3').verbose();
const { rejects } = require('assert');
const { table } = require('console');
const ExcelJS = require('exceljs');
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const { saveToStorage, readFromStorage } = require('../storage');
const pasta = 'src/projetos'

const deleteTable = async (table, db) => new Promise((resolve, reject) => {
    db.all(`DELETE FROM ${table}`, [], (err, rows) => {
        if (err) {
            console.log(`Erro ao deletar tabela: ${table}`);
            reject(err);
        } else {
            console.log(`Tabela deletada: ${table}`);

            // Encapsula o VACUUM em uma Promise
            db.run(`VACUUM`, (vacuumErr) => {
                if (vacuumErr) {
                    console.log(`Erro ao executar VACUUM: ${vacuumErr.message}`);
                    reject(vacuumErr);
                } else {
                    console.log(`VACUUM executado com sucesso`);
                    resolve(rows);
                }
            });
        }
    });
});

const getTables = (filter, db) => new Promise((resolve, reject) => {
    db.all(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT IN (${filter.map(name => `'${name}'`).join(', ')})`, [], (err, tables) => {
        if (err) {
            reject(err);
        } else {
            resolve(tables);

        }
    });
});

const getDataFromTable = (table, db) => new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
        if (err) {
            reject(err);
        } else {
            resolve(rows);
        }
    });
});



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, pasta); // Diretório onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`); // Nome do arquivo salvo
    }
});

const upload = multer({ storage })

module.exports = {
    async create(req, res) {
        const { project_name } = req.params

        const { based_on } = req.headers
        const db = new sqlite3.Database('src/db/producao.db');
        const workbook = new ExcelJS.Workbook();

        const getProjects = async () => {
            try {
                const arquivos = await fs.promises.readdir(pasta); // Usa Promises para ler os arquivos de forma assíncrona
                const nomesSemExtensao = arquivos.map((arquivo) => path.parse(arquivo).name);
                return nomesSemExtensao;
            } catch (err) {
                if (err.code === 'ENOENT') {
                    return []; // Retorna um array vazio se a pasta não existe
                } else {
                    return ['Erro ao ler a pasta'];
                }
            }
        };

        const copyProject = (based_on, project_name) => {
            const based_project = path.join(pasta, based_on + '.xlsx'); // Cria o caminho para o novo arquivo
            const new_project = path.join(pasta, project_name + '.xlsx'); // Cria o caminho para o novo arquivo

            fs.copyFile(based_project, new_project, (err) => {
                if (err) {
                    console.error('Erro ao duplicar o arquivo:', err);
                } else {
                    console.log(`Arquivo duplicado com sucesso como ${new_project}`);
                }
            });
        };

        try {
            let tables = await getTables(['Usuarios', 'sqlite_sequence'], db);
            let projects = await getProjects()
            // Processa cada tabela de forma síncrona
            if (projects.includes(project_name)) {
                res.status(400).send({ code: 400, error: 'Projeto já existente' });
            } else if (projects.includes(based_on)) {
                copyProject(based_on, project_name)
                res.status(200).send({ code: 200, message: 'Criação concluída com sucesso' });
            } else {
                for (const { name: tableName } of tables) {

                    deleteTable(tableName, db)

                    const sheet = workbook.addWorksheet(tableName);
                    // Obtenha e adicione os dados de cada tabela

                    const rows = await getDataFromTable(tableName, db);

                    if (rows.length > 0) {
                        // Defina o cabeçalho com as colunas da tabela
                        sheet.columns = Object.keys(rows[0]).map((col) => ({ header: col, key: col }));


                        // Adicione cada linha ao Excel
                        rows.forEach(row => sheet.addRow(row));
                    } else {
                        // Se a tabela estiver vazia, ainda defina o cabeçalho
                        const columnHeaders = await new Promise((resolve, reject) => {
                            db.all(`PRAGMA table_info(${tableName})`, [], (err, columns) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const headers = columns.map(col => col.name);
                                    resolve(headers);
                                }
                            });
                        });

                        // Defina o cabeçalho da aba mesmo que a tabela esteja vazia
                        sheet.columns = columnHeaders.map((col) => ({ header: col, key: col }));
                    }
                }


                // Cria a pasta, caso ela não exista
                await fs.promises.mkdir('src/projetos/', { recursive: true });
                // Aguarde a gravação do arquivo Excel
                await workbook.xlsx.writeFile(`src/projetos/${project_name}.xlsx`);
                console.log(`Criação concluída em: src/projetos/${project_name}.xlsx`);

                res.status(200).send({ code: 200, message: 'Criação concluída com sucesso' });
            }
        } catch (error) {
            console.error("Erro durante a criação:", error);
            res.status(500).json({ error: error.message });
        } finally {
            db.close();
        }
    },

    async get(req, res) {
        fs.readdir(pasta, (err, arquivos) => {
            if (err) {
                // Verifica se o erro é porque a pasta não existe
                if (err.code === 'ENOENT') {
                    return res.json([]); // Retorna um array vazio se a pasta não existe
                } else {
                    return res.status(500).json({ error: 'Erro ao ler a pasta' });
                }
            }

            // Mapeia os arquivos, removendo a extensão
            const nomesSemExtensao = arquivos.map((arquivo) => path.parse(arquivo).name);
            res.json(nomesSemExtensao); // Retorna a lista de nomes de arquivos sem extensão
        });

    },

    async load(req, res) {
        const mapValueToType = (value, type) => {
            if (type === 'INTEGER') return parseInt(value, 10) || 0;
            if (type === 'REAL' || type === 'FLOAT') return parseFloat(value) || 0.0;
            if (type === 'TEXT') return String(value || '');
            if (type === 'BOOLEAN') return value === 'true' || value === true ? 1 : 0;
            return value;
        };

        const { project_name } = req.params;
        console.log(`Carregando projeto: ${project_name}`);

        const db = new sqlite3.Database('src/db/producao.db');

        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(`${pasta}/${project_name}.xlsx`);

        // Promessa para lidar com cada aba do Excel
        const sheetPromises = workbook.worksheets.map(async (sheet) => {
            const jsonData = [];

            // Ler as linhas da aba
            sheet.eachRow((row, rowNumber) => {
                if (rowNumber === 1) return;

                const rowData = {};
                row.eachCell((cell, colNumber) => {
                    const colName = sheet.getRow(1).getCell(colNumber).value;
                    rowData[colName] = cell.value;
                });

                if (Object.keys(rowData).length > 0) {
                    jsonData.push(rowData);
                }
            });

            if (jsonData.length > 0) {
                return new Promise((resolve, reject) => {
                    db.all(`PRAGMA table_info(${sheet.name})`, [], (err, columns) => {
                        if (err) {
                            console.error(`Erro ao obter informações da tabela ${sheet.name}: ${err.message}`);
                            return reject(err);
                        }

                        const colTypes = {};
                        columns.forEach(col => {
                            colTypes[col.name] = col.type;
                        });

                        const insertSQL = `INSERT INTO ${sheet.name} (${Object.keys(jsonData[0]).join(', ')}) VALUES (${Object.keys(jsonData[0]).map(() => '?').join(', ')});`;

                        // Limpa a tabela antes de inserir novos dados
                        db.run(`DELETE FROM ${sheet.name}`, (err) => {
                            if (err) {
                                console.error(`Erro ao limpar tabela ${sheet.name}: ${err.message}`);
                                return reject(err);
                            }

                            // Insere os dados na tabela
                            const insertPromises = jsonData.map((row) => {
                                return new Promise((resolveInsert, rejectInsert) => {
                                    const values = Object.keys(row).map(col => mapValueToType(row[col], colTypes[col]));
                                    db.run(insertSQL, values, (err) => {
                                        if (err) {
                                            console.error(`Erro ao inserir dados na tabela ${sheet.name}: ${err.message}`);
                                            return rejectInsert(err);
                                        }
                                        resolveInsert();
                                    });
                                });
                            });

                            Promise.all(insertPromises)
                                .then(resolve)
                                .catch(reject);
                        });
                    });
                });
            } else {
                // Limpar registros se a aba estiver vazia
                return new Promise((resolve, reject) => {
                    db.run(`DELETE FROM ${sheet.name}`, (err) => {
                        if (err) {
                            console.error(`Erro ao excluir os registros da tabela ${sheet.name}:`, err.message);
                            return reject(err);
                        }
                        console.log(`Todos os registros da tabela ${sheet.name} foram excluídos com sucesso.`);
                        resolve();
                    });
                });
            }
        });

        // Aguarde que todas as promessas de processamento sejam concluídas
        try {
            await Promise.all(sheetPromises);
            res.status(200).send({ code: 200, message: 'Projeto carregado com sucesso' });
            saveToStorage('activeProject', project_name);
        } catch (error) {
            res.status(500).send({ code: 500, message: 'Erro ao carregar o projeto', error: error.message });
        }
        // finally {
        //     db.close(); // Fechar o banco somente após todas as operações concluídas
        //     console.log('Conexão com o banco de dados encerrada.');
        // }
    },

    async edit(req, res) {
        const { project_name } = req.params
        const { new_project_name } = req.headers

        console.log(project_name)
        console.log(new_project_name)

        const oldPath = `${pasta}/${project_name}.xlsx`;
        const newPath = `${pasta}/${new_project_name}.xlsx`;

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error('Erro ao renomear o arquivo:', err);
            } else {
                console.log('Arquivo renomeado com sucesso!');
                res.status(200).send({ code: 200, message: `Projeto renomeado de ${project_name} para ${new_project_name}.` });
            }
        });
    },

    async delete(req, res) {
        const { project_name } = req.params

        // Conectar ao banco de dados SQLite
        const db = new sqlite3.Database('src/db/producao.db');

        const filePath = `${pasta}/${project_name}.xlsx`;

        // Deletar o arquivo
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Erro ao deletar o arquivo: ${err.message}`);
                return;
            }
            console.log(`Arquivo ${filePath} deletado com sucesso!`);
            res.status(200).send({ code: 200, message: 'Item deletado com sucesso.' });
        });
    },

    async export(req, res) {
        const { project_name } = req.params

        // Conectar ao banco de dados SQLite
        const filePath = `${pasta}/${project_name}.xlsx`;

        // Enviar o arquivo para download
        res.download(filePath, (err) => {
            if (err) {
                console.error(`Erro ao enviar o arquivo: ${err.message}`);
                res.status(500).send('Erro ao fazer download do arquivo');
            }
        });

    },

    async import(req, res) {

        // Crie um middleware para processar o upload antes de continuar
        const uploadMiddleware = upload.array('selectedFiles');

        // Execute o middleware
        uploadMiddleware(req, res, async (err) => {
            if (err) {
                return res.status(500).send({ error: 'Erro ao fazer upload do arquivo' });
            }

            try {
                const files = req.files; // Os arquivos carregados estarão disponíveis aqui

                if (!files || files.length === 0) {
                    return res.status(400).send({ error: 'Nenhum arquivo foi enviado' });
                }

                // Aqui você pode processar os arquivos conforme necessário

                res.status(200).send({ message: 'Arquivos salvos com sucesso', files });
            } catch (error) {
                res.status(500).send({ error: 'Erro ao salvar os arquivos' });
            }
        });
    },

    async active(req, res) {
        const { project_name } = req.params

        saveToStorage('activeProject', project_name)
    },

    async save(req, res) {
        const { project_name } = req.params;
        const db = new sqlite3.Database('src/db/producao.db');
        const workbook = new ExcelJS.Workbook();

        try {
            await workbook.xlsx.readFile(`src/projetos/${project_name}.xlsx`);
            const tables = await getTables(['Usuarios', 'sqlite_sequence'], db);

            for (const { name: tableName } of tables) {
                const sheet = workbook.getWorksheet(tableName);
                const rows = await getDataFromTable(tableName, db); // Dados do banco

                if (!sheet) {
                    console.warn(`Aba ${tableName} não encontrada no Excel.`);
                    continue;
                }

                // Criar um mapa de comparação com base na chave única de identificação (assumindo que é 'id')
                const dbRowMap = new Map(rows.map((row) => [row.id, row]));
                const excelRowMap = new Map();

                // Itera pelas linhas do Excel para preencher o mapa e verificar inconsistências
                sheet.eachRow((excelRow, rowIndex) => {
                    if (rowIndex === 1) return; // Ignorar o cabeçalho

                    const rowId = excelRow.getCell(1).value; // Supondo que a coluna "ID" seja a primeira
                    if (rowId !== null && rowId !== undefined) {
                        excelRowMap.set(rowId, { excelRow, rowIndex });
                    }
                });

                // Remover linhas no Excel que não estão no banco
                for (const [rowId, { rowIndex }] of excelRowMap) {
                    if (!dbRowMap.has(rowId)) {
                        sheet.spliceRows(rowIndex, 1);
                        console.log(`Linha removida: ID ${rowId}`);
                    }
                }

                // Atualizar ou adicionar linhas
                rows.forEach((dbRow) => {
                    const excelData = excelRowMap.get(dbRow.id);

                    if (excelData) {
                        // Atualizar linha existente
                        const { excelRow } = excelData;
                        Object.keys(dbRow).forEach((col, colIndex) => {
                            const cellValue = String(dbRow[col]).trim();
                            const excelValue = String(excelRow.getCell(colIndex + 1).value || '').trim();

                            if (cellValue !== excelValue) {
                                excelRow.getCell(colIndex + 1).value = dbRow[col];
                            }
                        });
                        excelRow.commit();
                    } else {
                        // Adicionar nova linha
                        sheet.addRow(Object.values(dbRow));
                    }
                });

                // Salvar o arquivo Excel atualizado
                await workbook.xlsx.writeFile(`src/projetos/${project_name}.xlsx`);
                console.log(`Auto save concluído para: src/projetos/${project_name}.xlsx`);
            }
        } catch (error) {
            console.error("Erro durante o auto save:", error);
        } finally {
            db.close();
        }
    }

}
