'use strict'

var content = "aku adalah anak gembala selalu riang serta gembira"

exports.login = function(req, res){
    if(req.method == 'GET'){
        res.render("index");
    }else{
        res.redirect("/home");
    }
}

exports.home = function(req, res){
    res.status(200).render('home');
}