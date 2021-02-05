module.exports = function localsUserCheck(req,res,next){
    if(req.session.use){
        res.locals.user = req.session.user;
    }
    next();
}