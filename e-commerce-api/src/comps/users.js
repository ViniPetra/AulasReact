const fs = require('fs');
const users = fs.readFileSync('src/users.json', 'utf-8');

exports.buscarUsers = () =>{
    return JSON.parse(users);
}

exports.buscarUserPorNome = (nome) =>{
    const allUsers = JSON.parse(users);
    return allUsers.filter( user => user.nome.toLowerCase().includes(nome.toLowerCase()));
}