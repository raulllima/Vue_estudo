const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS ItensC1 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cod_item INTEGER NOT NULL,
        descricao TEXT NOT NULL,
        material TEXT NOT NULL,
        compos_quimica TEXT NOT NULL,
        quantidade FLOAT NOT NULL,
        unidade TEXT NOT NULL,
        peso_unit_kg FLOAT NOT NULL,
        custo_unit FLOAT NOT NULL,
        fabricante TEXT NOT NULL,
        aplic_comercial TEXT NOT NULL,
        demanda_mensal TEXT NOT NULL,

        type_item TEXT NOT NULL,
        qtd_compartilhada FLOAT NOT NULL,
        qtd_naoCompartilhada FLOAT NOT NULL,
        up_cycling TEXT NOT NULL,
        down_cycling TEXT NOT NULL
    )
    `, (err) => {
        if (err) {
            console.error(err)
            console.error("[FAIL] Tabela 'ItensC1'.")
        } else {
            console.log("[OK] Tabela 'ItensC1'.")
        }
    });
});

module.exports = {
    async count(req, res) {
        db.get(`
            SELECT seq FROM sqlite_sequence WHERE name = 'ItensC1'
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
            SELECT * FROM ItensC1 WHERE id = ?
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
            SELECT * FROM ItensC1    
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
            cod_item,
            descricao,
            material,
            compos_quimica,
            quantidade,
            unidade,
            peso_unit_kg,
            custo_unit,
            fabricante,
            aplic_comercial,
            demanda_mensal,
            type_item,
            qtd_compartilhada,
            qtd_naoCompartilhada,
            up_cycling,
            down_cycling
        } = req.body.data || req.body
        // Fast validation
        const requiredFields = [
            cod_item,
            descricao,
            material,
            compos_quimica,
            quantidade,
            unidade,
            peso_unit_kg,
            custo_unit,
            fabricante,
            aplic_comercial,
            demanda_mensal,
            type_item,
            qtd_compartilhada,
            qtd_naoCompartilhada,
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
                INSERT INTO ItensC1 (
                    cod_item, 
                    descricao, 
                    material, 
                    compos_quimica, 
                    quantidade, 
                    unidade, 
                    peso_unit_kg, 
                    custo_unit, 
                    fabricante, 
                    aplic_comercial, 
                    demanda_mensal, 
                    type_item, 
                    qtd_compartilhada, 
                    qtd_naoCompartilhada, 
                    up_cycling, 
                    down_cycling
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            DELETE FROM ItensC1 WHERE id = ?
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
            cod_item,
            descricao,
            material,
            compos_quimica,
            quantidade,
            unidade,
            peso_unit_kg,
            custo_unit,
            fabricante,
            aplic_comercial,
            demanda_mensal,
            type_item,
            qtd_compartilhada,
            qtd_naoCompartilhada,
            up_cycling,
            down_cycling
        } = req.body.data;

        const updatedFields = [
            cod_item,
            descricao,
            material,
            compos_quimica,
            quantidade,
            unidade,
            peso_unit_kg,
            custo_unit,
            fabricante,
            aplic_comercial,
            demanda_mensal,
            type_item,
            qtd_compartilhada,
            qtd_naoCompartilhada,
            up_cycling,
            down_cycling
        ];

        db.run(`
            UPDATE ItensC1 
            SET 
                cod_item = ?, 
                descricao = ?, 
                material = ?, 
                compos_quimica = ?, 
                quantidade = ?, 
                unidade = ?, 
                peso_unit_kg = ?, 
                custo_unit = ?, 
                fabricante = ?, 
                aplic_comercial = ?, 
                demanda_mensal = ?, 
                type_item = ?, 
                qtd_compartilhada = ?, 
                qtd_naoCompartilhada = ?, 
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