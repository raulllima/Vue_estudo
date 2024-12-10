const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/db/producao.db')
const bcrypt = require('bcrypt');

// Create Database Base
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS Usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        username TEXT NOT NULL,
        password TEXT NOT NULL
    )

    `, (err) => {
        if (err) {
            console.error(err)
            console.error("[FAIL] Tabela 'Usuarios'.")
        } else {
            console.log("[OK] Tabela 'Usuarios'.")
        }
    });
});

module.exports = {
    async getUser(req, res) {
        const { username, password } = req.body.data || req.body

        db.get(`
            SELECT * FROM Usuarios WHERE username = ?
        `, [username], async (err, row) => {
            if (err) {
                res.status(500).send({
                    "code": 500,
                    "msg": err.message
                })
            }
            if (row) {
                const isMatch = await bcrypt.compare(password, row.password)
                if (isMatch) {
                    res.status(200).send({
                        "code": 200,
                        "username": row.username
                    })
                } else {
                    res.status(404).send({
                        "code": 404,
                        "msg": "Usuário e/ou senha incorretos!"
                    })
                }
            } else {
                res.status(404).send({
                    "code": 404,
                    "msg": "Usuário não encontrado. Verifique suas credenciais."
                });
            }
        })
    },
    async createUser(req, res) {
        const { username, password } = req.body.data || req.body;

        const encryPassword = await bcrypt.hash(password, 10)

        const requiredFields = Object.values([username, encryPassword])

        const invalidFields = requiredFields
            .filter(field => !field)
            .map(field => field);

        if (invalidFields.length > 0) {
            return res.status(400).send({
                code: 400,
                msg: "Campos obrigatórios faltando. Por favor, verifique se todos os campos foram preenchidos.",
                missingFields: invalidFields
            });
        }

        db.serialize(() => {
            db.run(`
                INSERT INTO Usuarios (
                    username,
                    password
                ) VALUES (?, ?)
            `, requiredFields, (err) => {
                if (err) {
                    return res.status(500).send({
                        "code": 500,
                        "msg": err.message
                    });
                } else {
                    return res.status(201).send({
                        "code": 201,
                        "msg": "Usuário criado com sucesso"
                    });
                }
            });
        });
    }
}