
module.exports = {
    home: (req,res) =>{
        res.render('index',{
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
    }
}