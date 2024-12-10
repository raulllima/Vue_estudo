const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS ItensC2 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        
        produto TEXT NOT NULL,
        cod_produto INTEGER NOT NULL,
        peso_total FLOAT NOT NULL,
        valor_total FLOAT NOT NULL,
        demanda_mensal_prod TEXT NOT NULL,

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
            console.error("[FAIL] Tabela 'ItensC2'.")
        } else {
            console.log("[OK] Tabela 'ItensC2'.")
        }
    });
});

module.exports = {
    async count(req, res) {
        db.get(`
            SELECT seq FROM sqlite_sequence WHERE name = 'ItensC2'
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
            SELECT * FROM ItensC2 WHERE id = ?
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
            SELECT * FROM ItensC2    
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
        const {
            produto,
            cod_produto,
            peso_total,
            valor_total,
            demanda_mensal_prod,

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
        } = req.body.data || req.body

        // Fast validation
        const requiredFields = [
            produto,
            cod_produto,
            peso_total,
            valor_total,
            demanda_mensal_prod,

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
            INSERT INTO ItensC2 (
                produto,
                cod_produto,
                peso_total,
                valor_total,
                demanda_mensal_prod,

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
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `, requiredFields, (err) => {
                if (err) {
                    return res.status(500).send({
                        "code": 500,
                        "msg": err
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
            DELETE FROM ItensC2 WHERE id = ?
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
            produto,
            cod_produto,
            peso_total,
            valor_total,
            demanda_mensal_prod,

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
        } = req.body.data;

        const updatedFields = [
            produto,
            cod_produto,
            peso_total,
            valor_total,
            demanda_mensal_prod,

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
        ];

        db.run(`
            UPDATE ItensC2 
            SET 
                produto = ?,
                cod_produto = ?,
                peso_total = ?,
                valor_total = ?,
                demanda_mensal_prod = ?,

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

            WHERE id = ${req.body.data.id}
        `, [...updatedFields], function (err) {
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