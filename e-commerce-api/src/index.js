const users = require('./comps/users'); 
const cadastrar = require('./comps/cadastrar');
const logar = require('./comps/login');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/login', (req, res) => {
  res.status(200).json({ message: 'Login API' });
});

app.get('/users', (req, res) => {
  res.status(200).json(users.buscarUsers());
});

app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  const resultado = users.buscarUserPorNome(name);

  if (resultado) {
    res.status(200).send(resultado);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

app.post('/users/cadastrar', (req, res) => {
  try
  {
    const { nome, email, user, senha } = req.body;
    const resultado = cadastrar.CadastrarUser(nome, email, user, senha);

    if (resultado.error) {
      res.status(500).send(resultado);
    } else {
      res.status(201).send(resultado);
    }
  }
  catch(err)
  {
    console.log(err);
    res.status(500).send({error: 'Erro ao cadastrar usuário'});
  }
});

app.post('/users/login', (req, res) => {
  try
  {
    const { user, senha } = req.body;
    const resultado = logar.logar(user, senha);
  
    if (resultado.error) {
      res.status(404).send(resultado);
    } else {
      res.status(200).send(resultado);
    }
  }
  catch(err)
  {
    console.log(err);
    res.status(500).send({error: 'Erro ao logar usuário'});
  }
});

app.listen(3000);



