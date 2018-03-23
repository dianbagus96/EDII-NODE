'use strict'
var express = require('express')
    ,app = express()
    ,port = process.env.port || 3000
    ,bodyParser = require('body-parser')
    ,routes = require('./web/routes/webRoutes');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json);

routes(app);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
