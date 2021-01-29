module.exports = (sequelize, dataTypes) =>{
    let alias = "CuentaBancaria";

    let cols = {
        id_cuenta : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        monto : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        fecha : {
            type : dataTypes.DATE(),
            allowNull : false
        },
        tipo : {
            type : dataTypes.STRING(100),
            allowNull : false 
        },
        concepto : {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName : "cuenta_bancaria",
        timestamps : true,
        underscored : true
    }

    const CuentaBancaria = sequelize.define(alias, cols,config);

    return CuentaBancaria;
}