//impotando o orm seuquelize
const { DataTypes } = require("sequelize");
//arquivo que faz conexão da api com o banco de dados.
const db = require("../db/conn");

// criando model de User
//o model user é a representação da nossa tabela users do banco de dados.
//o model de user contém a estrutura da nossa tabela users no banco de dados.
const User = db.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
}); 

// exportando o módulo de User, para utilizar ele em outros arquivos da aplicação.
module.exports = User;