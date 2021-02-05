const {check, validationResult, body} = require("express-validator");
const db = require("../database/models")
module.exports =[
    check('nombre')
    .isLength({ 
        min:1
    }).withMessage("Debe ingresar su nombre"),
    check('apellido')
    .isLength({ 
        min:1
    }).withMessage("Debe ingresar su apellido"),
    check('email')
    .isEmail()
    .isLength({ 
        min:1
    }).withMessage("Debe ingresar un mail valido"),
    body("email")
    .custom(function(value){
        console.log(value);
        return db.Usuario.findOne({
            where : {
                email:value
            }
        })
        .then(user =>{
            if(user){
                return Promise.reject("Este email ya está registado.")
            }
        } )
    }),
    check("password")
    .isLength({
        min:6, max: 10
    }).withMessage("Debe ingresar entre 6 a 10 caracteres."),
    body("password2")
    .custom((value,{req})=>{
        if(value !=req.body.password){
            return false
        }
        return true
    }).withMessage("Las contraseñas no coindicen.")
    
]