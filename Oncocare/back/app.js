const express = require("express");
const cors = require("cors");
const port = 3002;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, ()=> console.log ("Rodando na porta " + port));

const connection = require('./db/connection.js');

// cadastro usuarias 

app.post('/usuarias', (req, res) => {
    const { nome, email, idade, cpf, senha } = req.body;
    const query = 'INSERT INTO usuarios (nome, email, idade, cpf, senha) VALUES(?, ?, ?, ?, ?)';
    
    connection.query(query, [nome, email, idade, cpf, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao criar conta' });
        }
        res.json({ success: true, message: "Conta criada com sucesso"});
    });
});


// login dos usuarias 

app.post('/login', (req, res) => { 
    const { nome, email, senha } = req.body;
 
    const query = 'SELECT * FROM usuarios WHERE nome = ? AND email = ? AND senha = ?';
 
    connection.query(query, [nome, email, senha], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro no servidor' });
        }
        if (results.length > 0) {
            console.log("login realizado com sucesso")
            res.json({ success: true, message: 'Login realizado com sucesso' });
        } else {
            res.json({ success: false, message: 'Nome, email ou senha incorretos' });
        }
    });
});