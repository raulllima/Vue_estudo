const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS Itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ref TEXT,
        produto TEXT,
        cod_item INTEGER,
        peso_total FLOAT,
        valor_total FLOAT,
        descricao TEXT,
        material TEXT,
        compos_quimica TEXT,
        quantidade FLOAT,
        unidade TEXT,
        peso_unit_kg FLOAT,
        custo_unit FLOAT,
        fabricante TEXT,
        aplic_comercial TEXT,
        demanda_mensal TEXT,
        fornecedor TEXT,
        aplicacao_comercial TEXT,
        material_organico TEXT,
        nocivo_saude TEXT,
        novico_ambiente TEXT,
        vendavel TEXT,
        destino TEXT,


        type_item TEXT,
        qtd_compartilhada FLOAT,
        qtd_naoCompartilhada FLOAT,
        up_cycling TEXT,
        down_cycling TEXT,

        inspecao_identificacao TEXT,
        inspecao_verificacao TEXT,
        inspecao_acesso TEXT,
        inspecao_r_desgaste TEXT,
        inspecao_manuseio TEXT,
        inspecao_separacao TEXT,
        inspecao_empilhamento TEXT,
        inspecao_seguranca TEXT,
        inspecao_alinhamento TEXT,

        limpeza_identificacao TEXT,
        limpeza_verificacao TEXT,
        limpeza_acesso TEXT,
        limpeza_r_desgaste TEXT,
        limpeza_manuseio TEXT,
        limpeza_separacao TEXT,
        limpeza_empilhamento TEXT,
        limpeza_seguranca TEXT,
        limpeza_alinhamento TEXT,

        desmontagem_identificacao TEXT,
        desmontagem_verificacao TEXT,
        desmontagem_acesso TEXT,
        desmontagem_r_desgaste TEXT,
        desmontagem_manuseio TEXT,
        desmontagem_separacao TEXT,
        desmontagem_empilhamento TEXT,
        desmontagem_seguranca TEXT,
        desmontagem_alinhamento TEXT,

        armazenagem_identificacao TEXT,
        armazenagem_verificacao TEXT,
        armazenagem_acesso TEXT,
        armazenagem_r_desgaste TEXT,
        armazenagem_manuseio TEXT,
        armazenagem_separacao TEXT,
        armazenagem_empilhamento TEXT,
        armazenagem_seguranca TEXT,
        armazenagem_alinhamento TEXT,

        reprocessar_identificacao TEXT,
        reprocessar_verificacao TEXT,
        reprocessar_acesso TEXT,
        reprocessar_r_desgaste TEXT,
        reprocessar_manuseio TEXT,
        reprocessar_separacao TEXT,
        reprocessar_empilhamento TEXT,
        reprocessar_seguranca TEXT,
        reprocessar_alinhamento TEXT,

        remontar_identificacao TEXT,
        remontar_verificacao TEXT,
        remontar_acesso TEXT,
        remontar_r_desgaste TEXT,
        remontar_manuseio TEXT,
        remontar_separacao TEXT,
        remontar_empilhamento TEXT,
        remontar_seguranca TEXT,
        remontar_alinhamento TEXT,

        testar_identificacao TEXT,
        testar_verificacao TEXT,
        testar_acesso TEXT,
        testar_r_desgaste TEXT,
        testar_manuseio TEXT,
        testar_separacao TEXT,
        testar_empilhamento TEXT,
        testar_seguranca TEXT,
        testar_alinhamento TEXT NOT NULL
    )

    `, (err) => {
        if (err) {
            console.error(err)
            console.error("[FAIL] Tabela 'Itens'.")
        } else {
            console.log("[OK] Tabela 'Itens'.")
        }
    });
});


module.exports = {
    async count(req, res) {
        db.get(`
            SELECT seq FROM sqlite_sequence WHERE name = 'Itens'
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
            SELECT * FROM Itens WHERE id = ?
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
        const { table } = req.query
        db.all(`
            SELECT * FROM ${table}    
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
        console.log(req.body)
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
                INSERT INTO Itens (
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
            DELETE FROM Itens WHERE id = ?
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
            UPDATE Itens 
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