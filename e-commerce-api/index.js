
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

app.post('/login', async (req, res)=>{
    const {name, password} = req.body;
    const resultado = await usersServices.logar(name, password);

    if(resultado){
        res.status(200).send('Login efetuado com sucesso');
    }
    else{
        res.status(401).send('Usuário ou senha inválidos');
    }
});

app.post('/cadastrar', async (req, res)=>{
    const {name, password} = req.body;
    const resultado = usersServices.cadastrar(name, password);

    if(resultado){
        res.status(201).send('Usuário cadastrado com sucesso');
    }
    else{
        res.status(400).send('Usuário já cadastrado');
    }
});

app.listen(8000);