const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS CustosC3 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        classificacao TEXT,
        descricao TEXT,
        qtde INTEGER,
        valor FLOAT,
        total FLOAT
    )
    `, (err) => {
        if (err) {
            console.error(err)
            console.error("[FAIL] Tabela 'CustosC3'.")
        } else {
            console.log("[OK] Tabela 'CustosC3'.")
        }
    });
});
 
module.exports = {
    async count(req, res) {
        db.get(`
            SELECT seq FROM sqlite_sequence WHERE name = 'CustosC3'
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
            return res.status(400).send("Por favor, forneça o ID do Custo.");
        }

        db.get(`
            SELECT * FROM CustosC3 WHERE id = ?
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
            SELECT * FROM CustosC3    
        `, (err, rows) => {
            if (err) {
                return res.status(500).send({
                    "code": 500,
                    "msg": err.message
                });
            }

            if (rows.length > 0) {
                return res.status(200).json(rows);
            } else {
                return res.status(204).send({
                    "code": 204,
                    "msg": "Nenhum item encontrado."
                });
            }
        });
    },
    async createItem(req, res) {
        const {
            classificacao,
            descricao,
            qtde,
            valor,
            rawTotal,
        } = req.body.data || req.body

        const total = qtde * valor

        // Fast validation
        const requiredFields = [
            classificacao,
            descricao,
            qtde,
            valor,
            total,
        ];

        const missingFields = requiredFields.filter(field => !field);

        if (missingFields.length > 0) {
            return res.status(400).send({
                "code": 400,
                "msg": "Campos obrigatórios faltando. Por favor, verifique se todos os campos foram preenchidos."
            });
        }

        db.serialize(() => {
            db.run(`
                INSERT INTO CustosC3 (
                    classificacao,
                    descricao,
                    qtde,
                    valor,
                    total
                ) VALUES (?, ?, ?, ?, ?)
            `, requiredFields, (err) => {
                if (err) {
                    return res.status(500).send({
                        "code": 500,
                        "msg": err.message
                    });
                } else {
                    return res.status(201).send({
                        "code": 201,
                        "msg": "Item criado com sucesso"
                    });
                }
            });
        });
    },
    async deleteItem(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send("Por favor, forneça o ID do item.");
        }

        db.run(`
            DELETE FROM CustosC3 WHERE id = ?
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
        const {
            classificacao,
            descricao,
            qtde,
            valor,
            rawTotal,
        } = req.body.data || req.body

        const total = qtde * valor

        // Fast validation
        const requiredFields = [
            classificacao,
            descricao,
            qtde,
            valor,
            total,
        ];

        const missingFields = requiredFields.filter(field => !field);

        if (missingFields.length > 0) {
            return res.status(400).send({
                "code": 400,
                "msg": "Campos obrigatórios faltando. Por favor, verifique se todos os campos foram preenchidos."
            });
        }

        db.run(`
            UPDATE CustosC3 
            SET 
                classificacao = ?,
                descricao = ?,
                qtde = ?,
                valor = ?,
                total = ?
            WHERE id = ${req.body.data.id}
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