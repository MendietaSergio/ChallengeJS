/* 
COOKIES PARA QUE QUEDE EL REGISTRO DEL ULTIMO LOGEO ACTIVO
*/

module.exports = function(req,res,next){
    if(req.cookies.userHomeBanking){
    req.session.user = req.cookies.userHomeBanking;
    res.locals.user = req.session.user;
    next()
    }else{
        next()
    }
}