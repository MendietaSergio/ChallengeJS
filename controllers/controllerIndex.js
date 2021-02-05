const db = require('../database/models');

const bcrypt = require('bcrypt');
const { validationResult, Result } = require('express-validator');
module.exports = {
    homeLogin: (req, res) => {
        res.render('login', {
            title: "Home Login",
            css: "login.css"
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        nick: user.nombre +" "+user.apellidom,
                        email: user.email,
                        rol: user.rol
                    }
                    res.locals.user = req.session.user;
                    return res.redirect("homeuser")
                })
                .catch(error => {
                    console.log("aca no");
                    res.send(error);
                })
        } else {
            res.render('login', {
                title: "Home Login",
                css: "login.css",
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    homeRegister: (req, res) => {
        console.log("estoy en homeregister");
        res.render('register', {
            title: "Registro Usuario",
            css: "register.css",
        })
    },
    processRegister: (req, res) => {
        console.log("process register");
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
            })
                .then(resultado => {
                    res.redirect('/')
                })
                .catch(error => res.send(error))
        } else {
            res.render('register', {
                title: "Registro Usuario",
                css: "register.css",
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    homeUser: (req, res) => {
        res.render('homeuser', {
            title: "Home",
            css: "Homeuser.css"
        })
    },
    editTable: (req, res) => {
        res.render('editTable', {
            title: "Editar Tabla",
            css: "editTable.css"
        })
    },
    entry: (req, res) => {
        res.render('entry', {
            title: "Ingreso",
            css: "entry.css"
        })
    },
    extraction: (req, res) => {
        res.render('extraction', {
            title: "Extraccion",
            css: "extraction.css"
        })
    },

}