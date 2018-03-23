'use strict';
var express = require("express")
    ,app = express()
    ,port = process.env.port || 3000
    ,routes = require("./web/routes/webRoutes");

    routes(app);

app.listen(port, ()=>{
    console.log("running on port " + port)
})