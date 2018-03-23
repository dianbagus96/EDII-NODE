'use strict';
var express =require('express'),
app = express(),
port = process.env.port || 3000,
bodyParser = require('body-parser'),
compression = require('compression'),
logger = require("./api/utils/logger");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/apipRoutes'); //importing route

logger.info("Listening on " + port);

logger.debug("Overriding 'Express' logger");
app.use(require('morgan')({ "stream": logger.stream }));

routes(app); //register the route

app.use(compression()); //Compress all routes

/* ---------- S: error handling ---------- */
app.use(function(req, res, next){
    res.status(404);
    res.json({"code":"404", "data" : {"message":"Page not Found Bro"} });
});

app.use(function(req, res, next){
    res.status(500);
    res.json({"code":"500", "data" : {"message":"Please Contact The Administrator System"} });
});
/* ---------- E: error handling ---------- */

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});