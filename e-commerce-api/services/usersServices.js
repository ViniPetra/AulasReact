const fs = require('fs');

exports.cadastrar = (name, password) => {
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    const users = JSON.parse(jsonData);
    const newUser = {name: name, password: password};

    users.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');

    return true;
}

exports.logar = (name, password) => {
    const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    const user  = userData.find(user => user.name === name);

    if(!user || user.password !== password){
        return false;
    }

    return true;
}