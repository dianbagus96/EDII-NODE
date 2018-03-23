'use strict';
module.exports = function(app){
    var web  = require('../controllers/webController');

    app.route('/')
        .get(web.login)
        .post(web.login);

    app.route('/home')
        .get(web.home);

};