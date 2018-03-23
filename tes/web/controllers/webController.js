'use strict';

exports.getAll = function(req, res){
    res.json("Welcome to Services OSS API Version 1.0 Dev")
}
// sequelize-auto -h 10.1.2.87 -d oss -u ossuser -x db0ss2017 -p 3306 --dialect "mysql" -c "./api/config/config.json" -o "./api/models" npm install -g mysql