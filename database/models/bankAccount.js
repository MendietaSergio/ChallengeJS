module.exports = (sequelize, dataTypes) =>{
    let alias = "CuentaBancaria";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        monto : {
            type : dataTypes.STRING(100),
        },
        fecha : {
            type : dataTypes.DATE(),
        },
        tipo : {
            type : dataTypes.STRING(100),
        },
        concepto : {
            type: dataTypes.STRING(100),
        }
    }

    let config = {
        tableName : "cuenta_bancaria",
        timestamps : false
    }

    const CuentaBancaria = sequelize.define(alias, cols,config);
/*
    CuentaBancaria.associate = function(models){

        CuentaBancaria.hasOne(models.Usuario,{
            as:"responsable",
            foreignKey: "id"
        })
    }*/

    return CuentaBancaria;
}