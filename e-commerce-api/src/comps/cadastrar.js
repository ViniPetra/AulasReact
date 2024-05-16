exports.CadastrarUser = (nome, email, user, senha) => {
    try
    {
        const fs = require('fs');
        const users = fs.readFileSync('src/users.json', 'utf-8');
        const allUsers = JSON.parse(users);
        allUsers.push({nome, email, user, senha});
        fs.writeFileSync('src/users.json', JSON.stringify(allUsers));
        return {nome, email, user, senha};
    }
    catch(err)
    {
        return {error: 'Erro ao cadastrar usuário'};
    }
}