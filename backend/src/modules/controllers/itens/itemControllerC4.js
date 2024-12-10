const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS ItensC4 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        cod_item INTEGER NOT NULL,
        descricao TEXT NOT NULL,
        material TEXT NOT NULL,
        desmenbrado TEXT NOT NULL,
        compos_quimica TEXT NOT NULL,
        quantidade FLOAT NOT NULL,
        unidade TEXT NOT NULL,
        custo FLOAT NOT NULL,
        demanda_mensal TEXT NOT NULL,
        fornecedor TEXT NOT NULL,
        aplic_comercial TEXT NOT NULL,
        material_organico TEXT NOT NULL,
        nocivo_saude TEXT NOT NULL,
        nocivo_ambiente TEXT NOT NULL,
        vendavel TEXT NOT NULL,
        destino TEXT NOT NULL,

        type_item TEXT NOT NULL,
        up_cycling TEXT NOT NULL,
        down_cycling TEXT NOT NULL,

        isAllowAnalysis BOOL NOT NULL
    )

    `, (err) => {
        if (err) {
            console.error(err)
            console.error("[FAIL] Tabela 'ItensC4'.")
        } else {
            console.log("[OK] Tabela 'ItensC4'.")
        }
    });
});

module.exports = {
    async count(req, res) {
        db.get(`
            SELECT seq FROM sqlite_sequence WHERE name = 'ItensC4'
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
            SELECT * FROM ItensC4 WHERE id = ?
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
            SELECT * FROM ItensC4    
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

        const invalidFields = requiredFields
            .filter(field => !field) // Filtra os campos cujo valor é "falsy"
            .map(field => field);

        if (invalidFields.length > 0) {
            return res.status(400).send({
                code: 400,
                msg: "Campos obrigatórios faltando. Por favor, verifique se todos os campos foram preenchidos.",
                missingFields: invalidFields
            });
        }

        requiredFields.push(false)

        db.serialize(() => {
            db.run(`
                INSERT INTO ItensC4 (
                    cod_item, 
                    descricao, 
                    material,
                    desmenbrado,
                    compos_quimica, 
                    quantidade, 
                    unidade, 
                    custo, 
                    demanda_mensal, 
                    fornecedor, 
                    aplic_comercial, 
                    material_organico, 
                    nocivo_saude, 
                    nocivo_ambiente, 
                    vendavel, 
                    destino,

                    type_item, 
                    up_cycling, 
                    down_cycling,

                    isAllowAnalysis
                ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `, requiredFields, (err) => {
                if (err) {
                    console.error("Erro ao inserir dados na tabela ItensC4:", err.message);
                    return res.status(500).send({
                        code: 500,
                        msg: "Erro ao inserir dados na tabela ItensC4."
                    });
                }
                res.status(200).send({
                    code: 200,
                    msg: "Dados inseridos com sucesso na tabela ItensC4."
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
            DELETE FROM ItensC4 WHERE id = ?
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
                ItensC4 
            SET
                cod_item = ?,
                descricao = ?,
                material = ?,
                desmenbrado = ?,
                compos_quimica = ?,
                quantidade = ?,
                unidade = ?,
                custo = ?,
                demanda_mensal = ?,
                fornecedor = ?,
                aplic_comercial = ?,
                material_organico = ?,
                nocivo_saude = ?,
                nocivo_ambiente = ?,
                vendavel = ?,
                destino = ?,

                type_item = ?,
                up_cycling = ?,
                down_cycling = ?,

                isAllowAnalysis = ?
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