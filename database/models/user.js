module.exports = (sequelize, dataTypes) =>{
    let alias = "Usuario";

    let cols = {
        id :{
            type : dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement : true,
            primaryKey : true
        },
        nombre :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        apellido :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        email :{
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        password :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        cuenta_id :{
            type : dataTypes.INTEGER(11)
        },
        rol_id :{
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName : "usuarios",
        timestamps : false
    }

    const Usuario = sequelize.define(alias, cols, config);
/*
    Usuario.associate = function(models){
        Usuario.hasOne(models.CuentaBancaria,{
            as:"cuenta",
            foreignKey: "cuenta_id"
        })
            
    }*/

    return Usuario;
}