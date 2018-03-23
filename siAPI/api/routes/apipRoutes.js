'use strict';
module.exports = function(app){
    var api  = require('../controllers/apipController');
    var getDoc  = require('../controllers/docController');

    app.route('/services/send_doc')
        .get(api.getAll);

    app.route('/services/send_doc')
        .get(api.getAll)
        .post(api.post);
    
    app.route('/services/get_doc.json')
        .get(getDoc.getAll)
        .post(getDoc.post);
    
    app.route('/services/get_doc.json/:id')
        .get(getDoc.getAll);
        
};