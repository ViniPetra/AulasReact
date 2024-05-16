exports.logar = (username, senha) => {
    const users = require('./users');
    const allUsers = users.buscarUsers();

    const user = allUsers.find(u => u.user == username && u.senha == senha);

    if (user) {
        return { user };
    } else {
        return { error: 'Usuário ou senha inválidos' };
    }
};

