const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS ItensC3 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        
        inspecao_identificacao TEXT NOT NULL,
        inspecao_verificacao TEXT NOT NULL,
        inspecao_acesso TEXT NOT NULL,

        limpeza_acesso TEXT NOT NULL,
        limpeza_rdesgaste TEXT NOT NULL,

        desmontagem_identificacao TEXT NOT NULL,
        desmontagem_acesso TEXT NOT NULL,
        desmontagem_rdesgaste TEXT NOT NULL,
        desmontagem_manuseio TEXT NOT NULL,
        desmontagem_separacao TEXT NOT NULL,

        armazenagem_identificacao TEXT NOT NULL,
        armazenagem_manuseio TEXT NOT NULL,
        armazenagem_empilhamento TEXT NOT NULL,

        reprocessar_acesso TEXT NOT NULL,
        reprocessar_rdesgaste TEXT NOT NULL,
        reprocessar_manuseio TEXT NOT NULL,
        reprocessar_separacao TEXT NOT NULL,

        remontar_acesso TEXT NOT NULL,
        remontar_rdesgaste TEXT NOT NULL,
        remontar_seguranca TEXT NOT NULL,
        remontar_alinhamento TEXT NOT NULL,

        testar_identificacao TEXT NOT NULL,
        testar_acesso TEXT NOT NULL,

        cod_item INTEGER NOT NULL,
        descricao TEXT NOT NULL,
        material TEXT NOT NULL,
        compos_quimica TEXT NOT NULL,
        quantidade FLOAT NOT NULL,
        unidade TEXT NOT NULL,
        peso_unit_kg FLOAT NOT NULL,
        custo_unit FLOAT NOT NULL,
        demanda_mensal TEXT NOT NULL,
        type_item TEXT NOT NULL,
        up_cycling TEXT NOT NULL,
        down_cycling TEXT NOT NULL
    )

    `, (err) => {
        if (err) {
            console.error(err)
            console.error("[FAIL] Tabela 'ItensC3'.")
        } else {
            console.log("[OK] Tabela 'ItensC3'.")
        }
    });
});


module.exports = {
    async count(req, res) {
        db.get(`
            SELECT seq FROM sqlite_sequence WHERE name = 'ItensC3'
            `, [], (err, row) => {

            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (err) {
                return res.status(500).send({
                    "code": 500,
                    "msg": err.message
                })
            }

            return res.status(200).send({
                "code": 200,
                "nextId": row ? row.seq + 1 : 1
            });
        });

    },
    async getItem(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send("Por favor, forneça o ID do item.");
        }

        db.get(`
            SELECT * FROM ItensC3 WHERE id = ?
        `, [id], (err, row) => {
            if (err) {
                res.status(500).send({
                    "code": 500,
                    "msg": err.message
                })
            }
            if (row) {
                res.status(200).json(row)
            } else {
                res.status(404).send({
                    "code": 404,
                    "msg": "Item não encontrado."
                });
            }
        })
    },
    async getAllItems(req, res) {
        db.all(`
            SELECT * FROM ItensC3    
        `, (err, rows) => {
            if (err) {
                res.status(500).send({
                    "code": 500,
                    "msg": err.message
                })
            }
            if (rows) {
                res.status(200).json(rows)
            } else {
                res.status(404).send({
                    "code": 404,
                    "msg": "Item não encontrado."
                });
            }
        })
    },
    async createItem(req, res) {
        const { ref, ...filterData } = req.body.data || req.body;
        // Validação dos campos obrigatórios
        formatValue = (valor) => {
            if (typeof valor === "string") {
                const trimmed = valor.trim();
                if (trimmed.toLowerCase() === "sim") {
                    return "Sim";
                } else if (trimmed.toLowerCase() === "não") {
                    return "Não";
                }
                return trimmed;
            }
            return valor;
        }
        const requiredFields = Object.values(filterData).map(formatValue)

        const missingFields = requiredFields.filter(field => !field);
        if (missingFields.length > 0) {
            return res.status(400).send({
                "code": 400,
                "msg": "Campos obrigatórios faltando. Por favor, verifique se todos os campos foram preenchidos."
            });
        }

        db.serialize(() => {
            db.run(`
                INSERT INTO ItensC3 (
                    inspecao_identificacao, 
                    inspecao_verificacao, 
                    inspecao_acesso, 

                    limpeza_acesso, 
                    limpeza_rdesgaste,

                    desmontagem_identificacao, 
                    desmontagem_acesso, 
                    desmontagem_rdesgaste, 
                    desmontagem_manuseio, 
                    desmontagem_separacao, 

                    armazenagem_identificacao, 
                    armazenagem_manuseio, 
                    armazenagem_empilhamento,

                    reprocessar_acesso, 
                    reprocessar_rdesgaste, 
                    reprocessar_manuseio, 
                    reprocessar_separacao,

                    remontar_acesso, 
                    remontar_rdesgaste, 
                    remontar_seguranca, 
                    remontar_alinhamento,

                    testar_identificacao, 
                    testar_acesso,
                    
                    cod_item, 
                    descricao, 
                    material, 
                    compos_quimica, 
                    quantidade, 
                    unidade,
                    peso_unit_kg, 
                    custo_unit, 
                    demanda_mensal, 
                    type_item, 
                    up_cycling, 
                    down_cycling
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, requiredFields, (err) => {
                if (err) {
                    console.error("Erro ao inserir dados na tabela ItensC3:", err.message);
                    return res.status(500).send({
                        code: 500,
                        msg: "Erro ao inserir dados na tabela ItensC3."
                    });
                }
                res.status(200).send({
                    code: 200,
                    msg: "Dados inseridos com sucesso na tabela ItensC3."
                });
            });
        });
    },
    async deleteItem(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send("Por favor, forneça o ID do item.");
        }

        db.run(`
            DELETE FROM ItensC3 WHERE id = ?
        `, [id], (err) => {
            if (err) {
                return res.status(500).send({
                    "code": 500,
                    "msg": err.message
                })
            }
            return res.status(200).send({
                "code": 200,
                "msg": "Item deletado com sucesso"
            });
        })

    },
    async editItem(req, res) {
        const { key, id, isReadonly, ...filterData } = req.body.data || req.body;
        // Validação dos campos obrigatórios
        formatValue = (valor) => {
            if (typeof valor === "string") {
                const trimmed = valor.trim();
                if (trimmed.toLowerCase() === "sim") {
                    return "Sim";
                } else if (trimmed.toLowerCase() === "não") {
                    return "Não";
                }
                return trimmed;
            }
            return valor;
        }
        const requiredFields = Object.values(filterData).map(formatValue)

        db.run(`
            UPDATE 
                ItensC3 
            SET 
                inspecao_identificacao = ?,
                inspecao_verificacao = ?,
                inspecao_acesso = ?,
                
                limpeza_acesso = ?,
                limpeza_rdesgaste = ?,
        
                desmontagem_identificacao = ?,
                desmontagem_acesso = ?,
                desmontagem_rdesgaste = ?,
                desmontagem_manuseio = ?,
                desmontagem_separacao = ?,
        
                armazenagem_identificacao = ?,
                armazenagem_manuseio = ?,
                armazenagem_empilhamento = ?,
        
                reprocessar_acesso = ?,
                reprocessar_rdesgaste = ?,
                reprocessar_manuseio = ?,
                reprocessar_separacao = ?,
        
                remontar_acesso = ?,
                remontar_rdesgaste = ?,
                remontar_seguranca = ?,
                remontar_alinhamento = ?,
        
                testar_identificacao = ?,
                testar_acesso = ?,
                
                cod_item = ?,
                descricao = ?,
                material = ?,
                compos_quimica = ?,
                quantidade = ?,
                unidade = ?,
                peso_unit_kg = ?,
                custo_unit = ?,
                demanda_mensal = ?,
                type_item = ?,
                up_cycling = ?,
                down_cycling = ?
            WHERE id = ${id}
        `, requiredFields, function (err) {
            if (err) {
                return console.error(err.message);
            }
            res.send({
                code: 200,
                msg: "Item atualizado com sucesso"
            });
        });
    }
}