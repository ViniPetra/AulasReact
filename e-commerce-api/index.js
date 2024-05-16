
const express = require('express');
const gnomosImportados = require('./services/gnomoServices');
const usersServices = require('./services/usersServices');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/gnomos', (req, res)=>{
    res.status(200).json(gnomosImportados.buscarGnomos())
});

app.get('/buscarGnomosPorElemento/:elemento', (req, res)=>{
    const {elemento} = req.params;
    const resultado = gnomosImportados.buscarGnomosPorElemento(elemento);

    if(resultado){
        res.status(200).send(resultado);
    }
    else{
        res.status(404).send('Gnomo não encontrado');
    }
});

app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try {
        const result = await usersServices.logar(name, password);

        if (result) {
            res.status(200).json({ message: 'Login efetuado com sucesso' });
        } else {
            res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }
    } catch (error) {
        console.error(`Erro ao processar o login: ${error.message}`);
        res.status(500).json({ message: 'Erro ao processar o login' });
    }
});

app.post('/cadastrar', async (req, res) => {
    const { name, password } = req.body;
    try {
        const result = await usersServices.cadastrar(name, password);

        if (result) {
            res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
        } else {
            res.status(400).json({ message: 'Usuário já cadastrado' });
        }
    } catch (error) {
        console.error(`Erro ao processar o cadastro: ${error.message}`);
        res.status(500).json({ message: 'Erro ao processar o cadastro' });
    }
});

app.listen(8000);