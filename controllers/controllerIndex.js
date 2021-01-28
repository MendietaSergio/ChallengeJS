
module.exports = {
    homeLogin: (req,res) =>{
        res.render('login',{
            title: "Home Login",
            css: "login.css"
        })
    },
    homeRegister:(req,res) =>{
        res.render('login',{
            title: "Registro Usuario",
            css: "login.css"
        })
    },
    homeUser: (req,res) =>{
        res.render('homeuser',{
            title: "Home",
            css: "Homeuser.css"
            })
    },
    editTable: (req,res) =>{
        res.render('editTable',{
            title: "Editar Tabla",
            css: "editTable.css"
        })
    },
    entry: (req,res) =>{
        res.render('entry',{
            title: "Ingreso",
            css: "entry.css"
        })
    },
    extraction: (req,res) =>{
        res.render('extraction',{
            title: "Extraccion",
            css: "extraction.css"
        })
    },
    
}