const fs = require('fs');

exports.addUser = (name, password) => {
    //ler o arquivo
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    //converter o arquivo para um json
    const users = JSON.parse(jsonData);
    //criar um novo usuário
    const newUser = {name: name, password: password};

    //adicionar o novo usuário ao json
    users.push(newUser);
    //salvar o json no arquivo
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');
}

exports.validateLogin = (name, password) => {
    const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    const user  = userData.find(user => user.name === name);

    if(!user || user.password !== password){
        return false;
    }

    return true;
}