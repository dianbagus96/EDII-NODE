'use strict'

module.exports = function(app){
    var web  = require('../controllers/webController');
    app.route('/')
        .get(web.getAll);

};