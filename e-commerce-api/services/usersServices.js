const fs = require('fs/promises');

exports.cadastrar = async (name, password) => {
    try {
        const jsonData = await fs.readFile('users.json', 'utf-8');
        const users = JSON.parse(jsonData);

        const userExists = users.some(user => user.name === name);
        if (userExists) {
            return false;
        }

        const newUser = { name: name, password: password };
        users.push(newUser);
        await fs.writeFile('users.json', JSON.stringify(users), 'utf-8');

        return true;
    } catch (error) {
        console.error(`Erro ao acessar o arquivo de usuários: ${error.message}`);
        throw error;
    }
}

exports.logar = async (name, password) => {
    try {
        const jsonData = await fs.readFile('users.json', 'utf-8');
        const users = JSON.parse(jsonData);
        const user = users.find(user => user.name === name);

        if (!user || user.password !== password) {
            return false;
        }

        return true;
    } catch (error) {
        console.error(`Erro ao ler o arquivo de usuários: ${error.message}`);
        throw error;
    }
}