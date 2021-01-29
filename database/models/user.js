module.exports = (sequelize, dataTypes) =>{
    let user = "Usuario";

    let cols = {
        id :{
            type : dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement : true,
            primaryKey : true
        },
        nombre :{
            type : dataTypes.STRING(100),
            allowNull: false,
        },
        apellido :{
            type : dataTypes.STRING(100),
            allowNull: false,
        },
        rol :{
            type : dataTypes.STRING(100),
            allowNull: false,
        },
        email :{
            type : dataTypes.STRING(100),
            allowNull: false,
        },
        contraseña :{
            type : dataTypes.STRING(100),
            allowNull: false,
        },
        fecha :{
            type : dataTypes.DATE(100),
            allowNull: false,
        }
    }

    let config = {
        tableName : "user",
        timestamps : true,
        underscored : true
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}