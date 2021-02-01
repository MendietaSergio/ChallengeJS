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
        },
        apellido :{
            type : dataTypes.STRING(100),
        },
        rol :{
            type : dataTypes.STRING(100),
        },
        email :{
            type : dataTypes.STRING(45),
        },
        password :{
            type : dataTypes.STRING(100),
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

    return Usuario;
}