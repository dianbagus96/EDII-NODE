'use strict';
var 
uuid = require('node-uuid'),
uniq = uuid.v4(),
Sequelize = require('sequelize'),
dateTime = require('node-datetime'),
err = require("../utils/log-err"),
log = require("../utils/log-reqres");

const Tblfcossppm           = require("../models").tblfcossppm
const Tbldmcompany          = require("../models").tbldmcompany
const Tblfccompanybusiness  = require("../models").tblfccompanybusiness
const Op = Sequelize.Op

var dt = dateTime.create();
var formatted = dt.format('YmdHMS');

exports.getAll = function(req, res){
    var idnya = req.params.id;
    
    if(req.header('key') == '123' && req.header('service')== 'PPM'){
        
        /*
            Tbldmcompany.hasMany(Tblfcossppm, {foreignKey: 'company_id', constraints: false});
            Tblfcossppm.belongsTo(Tbldmcompany, {foreignKey: 'company_id', constraints: false});
            Tblfcossppm.belongsTo(Tblfccompanybusiness, {foreignKey: 'company_id'});
            Tblfccompanybusiness.hasMany(Tblfcossppm, {foreignKey: 'company_id'});
        */

        Tblfcossppm.belongsTo(Tblfccompanybusiness, {targetKey:'company_id',foreignKey: 'company_id'});
        Tblfcossppm.belongsTo(Tbldmcompany, {targetKey:'company_id',foreignKey: 'company_id'});
        
        Tblfcossppm.findAll({
            attributes:['oss_id', 'ppm_no', 'ppm_date'], 
            include: [
                Tbldmcompany, Tblfccompanybusiness
                     ],
                     
            
            
        })
        //.on('sql', console.log)
        .then(tblfcossppm => {
            var jml = tblfcossppm.length
            var data = [] ;

            for(var i=0; i<=jml-1; i++){
                data[i] = {
                    oss_id              : tblfcossppm[i].oss_id,
                    no_ppm              : tblfcossppm[i].ppm_no,
                    nama_perusahaan     : tblfcossppm[i].tbldmcompany.name,
                    alamat_perusahaan   : tblfcossppm[i].tbldmcompany.address,
                    no_telp             : tblfcossppm[i].tbldmcompany.telp,
                    lok_proyek          : tblfcossppm[i].tblfccompanybusiness.address,
                    tgl_terbit          : tblfcossppm[i].ppm_date,
                    id_prop             : tblfcossppm[i].tblfccompanybusiness.prop,
                    id_kota             : tblfcossppm[i].tblfccompanybusiness.kab,
                } 
            }
            

            res.status(201)
                .json({
                    "code":"00", 
                    "data" : 
                        
                    data         
                         
                 });
             
            //res.end(tblfcossppm);    
        })
    }else if(req.header('x-api-key') == 'NTkwMThmYWYwZDA4NmQxZmVjNzhmMDVkMjY4YzIzYjQ=' && req.header('x-api-type')== 'PPM'){
        //PPM GET DATA2
        
        Tblfcossppm.belongsTo(Tbldmcompany, {targetKey:'company_id',foreignKey: 'company_id'});
        Tblfcossppm.belongsTo(Tblfccompanybusiness, {targetKey:'company_id',foreignKey: 'company_id'});
            

        var q = Tblfcossppm.findAll({
            attributes:['oss_id', 'ppm_no', 'ppm_date'], 
            include: [
                Tbldmcompany, Tblfccompanybusiness
                     ],
            limit : 100
        })
        //console.log(idnya);
        if(typeof idnya !== "undefined"){
            
            var q = Tblfcossppm.findAll({
                attributes:['oss_id', 'ppm_no', 'ppm_date'], 
                include: [
                    Tbldmcompany, Tblfccompanybusiness
                         ],
                limit : 100,
                where: {
                        oss_id: idnya,
                }
            })
        }

        q
        //.on('sql', console.log)
        .then(tblfcossppm => {
            var jml = tblfcossppm.length
            var data = [] ;

            for(var i=0; i<=jml-1; i++){
                data[i] = {
                    oss_id              : tblfcossppm[i].oss_id,
                    no_ppm              : tblfcossppm[i].ppm_no,
                    tgl_terbit          : tblfcossppm[i].ppm_date,
                    nama_perusahaan     : tblfcossppm[i].tbldmcompany.name,
                    alamat_perusahaan   : tblfcossppm[i].tbldmcompany.address,
                    no_telp             : tblfcossppm[i].tbldmcompany.telp,
                    lok_proyek          : tblfcossppm[i].tblfccompanybusiness.address,
                    id_prop             : tblfcossppm[i].tblfccompanybusiness.prop,
                    id_kota             : tblfcossppm[i].tblfccompanybusiness.kab,

                } 
            }
            

            res.status(201)
                .json({
                    "code":"00", 
                    "data" : data      
                 });     
        })
        
        //res.status(200).send("Welcome to Services OSS-PPM V.2 DEBUGING");   
    }else if(req.header('x-api-key') == 'UzJGdmN5QlVZVzVrWVNCUVpXNWtkV1IxYXlCUFUxTXRRa3RRVFE9PQ==' && req.header('x-api-type')== 'TDP'){
        //TDP GET DATA
        res.status(200).send("Welcome to Services OSS-TDP V.1");

    }else if(req.header('x-api-key') == 'U1UxQ0xVOVRVdz09' && req.header('x-api-type')== 'IMB'){
        //IMB GET DATA 
        res.status(200).send("Welcome to Services OSS-IMB V.1");

    }else{
        //res.status(400).json({"code":"97", "data" : {"message":"Api Wrong, Please Contact The Administrator"} });
        res.status(400).send("Welcome to Service OSS-PPM V.1");
    }
}



exports.post = function(req, res){

    if(req.header('x-api-key') == 'UzJGdmN5QlVZVzVrWVNCUVpXNWtkV1IxYXlCUFUxTXRRa3RRVFE9PQ==' && req.header('x-api-type')== 'PPM'){
        Tblfcossppm.belongsTo(Tbldmcompany, {targetKey:'company_id',foreignKey: 'company_id'});
        Tblfcossppm.belongsTo(Tblfccompanybusiness, {targetKey:'company_id',foreignKey: 'company_id'});
          
        var q = Tblfcossppm.findAll({
            attributes:['oss_id', 'ppm_no', 'ppm_date'], 
            include: [
                Tbldmcompany, Tblfccompanybusiness
                        ],
            limit : 100,
            where: {
                    ppm_no: req.body.ppm_no,
            }
        });

        q
        //.on('sql', console.log)
        .then(tblfcossppm => {
            var jml = tblfcossppm.length
            var data = [] ;

            for(var i=0; i<=jml-1; i++){
                data[i] = {
                    oss_id              : tblfcossppm[i].oss_id,
                    no_ppm              : tblfcossppm[i].ppm_no,
                    tgl_terbit          : tblfcossppm[i].ppm_date,
                    nama_perusahaan     : tblfcossppm[i].tbldmcompany.name,
                    alamat_perusahaan   : tblfcossppm[i].tbldmcompany.address,
                    no_telp             : tblfcossppm[i].tbldmcompany.telp,
                    lok_proyek          : tblfcossppm[i].tblfccompanybusiness.address,
                    id_prop             : tblfcossppm[i].tblfccompanybusiness.prop,
                    id_kota             : tblfcossppm[i].tblfccompanybusiness.kab,

                } 
            }
            

            res.status(201)
                .json({
                    "code":"00", 
                    "data" : data      
                });     
        })

    }else{
        //res.status(400).json({"code":"97", "data" : {"message":"Api Wrong, Please Contact The Administrator"} });
        res.status(400).send("Welcome to Service OSS-PPM V.1");
    }
}
  
// sequelize-auto -h 10.1.2.87 -d oss -u ossuser -x db0ss2017 -p 3306 --dialect "mysql" -c "./api/config/config.json" -o "./api/models" npm install -g mysql