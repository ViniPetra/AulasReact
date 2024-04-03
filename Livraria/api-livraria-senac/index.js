//chamando o pacote que eu instalei para dentro
//do meu projeto para poder usá-lo
const express = require('express');
const livrosImportados = require('./services/livroServices');
const cors = require('cors');

//crio uum objeto app para recer todas as funções do express
const app = express();
app.use(cors());


//callback => função que é passada como parâmetro para ser executada
app.get('/livros', (req, res)=>{
    res.status(200).json(livrosImportados.buscarLivros())
});

app.get('/buscarLivrosPorTitulos/:title', (req, res)=>{
    const {title} = req.params;
    const resultado = livrosImportados.buscarLivrosPorTitulos(title);

    if(resultado){
        res.status(200).send(resultado);
    }
    else{
        res.status(404).send('Livro não encontrado');
    }

});

app.listen(8000)