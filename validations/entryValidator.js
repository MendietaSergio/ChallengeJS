
const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');
const { is } = require('sequelize/types/lib/operators');
/*
REQUERIMOS LOS MODELOS DE LA BASE DE DATOS CREADAS CON SEQUELIZE Y MODIFICAMOS EL CODIGO PARA HACER USO DE ESO.
*/

module.exports = [
    check('ingreso')
    .isLength({
        min:1
    }).withMessage("Debe ingresar un valor."),

    check('concepto')
    .isLength({
        min:1
    }).withMessage("Debe escribir un concepto.")
]