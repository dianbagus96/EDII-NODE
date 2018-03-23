'use strict';
var express = require('express')
, session = require('express-session')
, app = express()
, port = process.env.port || 3000
, bodyParser = require('body-parser')
, routes = require('./web/routes/webRoutes')
, db = require('./web/models')
, passport = require('passport')
, passportConfig = require('./web/config/passportConfig');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret : 'goatmakemebetterchoice'}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', 'web/views');

routes(app);

app.listen(port, () => {
    console.log('App listening on port ' + port + '!');
});