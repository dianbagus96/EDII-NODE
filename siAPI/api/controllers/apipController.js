'use strict';
var 
uuid = require('node-uuid'),
uniq = uuid.v4(),
Sequelize = require('sequelize'),
dateTime = require('node-datetime'),
err = require("../utils/log-err"),
log = require("../utils/log-reqres");

const Tblfcossapi        = require("../models").tblfcossapi
const Tblfcosshdr        = require("../models").tblfcosshdr
const Tblfcossdeed       = require("../models").tblfcossdeed
const Tblfcosstdp        = require("../models").tblfcosstdp
const Tblfcossnik        = require("../models").tblfcossnik
const Tblfcossnpwp       = require("../models").tblfcossnpwp
const Tblfcosslocation   = require("../models").tblfcosslocation
const Tblfcossimb        = require("../models").tblfcossimb
const Tblfcossiui        = require("../models").tblfcossiui
const Tblfcossmerk       = require("../models").tblfcossmerk
const Tblfcosssni        = require("../models").tblfcosssni
const Tblfcosstdup       = require("../models").tblfcosstdup
const Tblfcossrptka      = require("../models").tblfcossrptka
const Tblfcossimta       = require("../models").tblfcossimta

var dt = dateTime.create();
var formatted = dt.format('YmdHMS');

exports.getAll = function(req, res){
    res.json("Welcome to Services OSS API Version 1.0 Dev")
}

exports.post = function(req, res){
    
    log.info(req.body);

    if(typeof req.body.DEED !== "undefined"){
         
        /**
         * S: Akta Service V.1
         * Edited 2018-02-19 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.DEED.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossdeed
            .findOrCreate({
                where: {
                    oss_id: req.body.Deed.oss_id,
                },
                defaults: {
                    oss_id               : req.body.DEED.oss_id,
                    deed_id              : 'AKTA'+formatted.toString().substr(0, 11),
                    company_id           : tblfcosshdr.company_id,
                    institute_id         : "00001",
                    reg_status           : "1",
                    notaris_name         : req.body.DEED.nama_notaris,
                    deed_no              : req.body.DEED.no_akta,
                    deed_date            : req.body.DEED.tgl_akta,
                    deed_sign_name       : req.body.DEED.nama_ttd_akta,
                    deed_sign_nip        : req.body.DEED.nip_ttd_akta,
                    deed_sign_date       : req.body.DEED.tgl_ttd_akta,
                    deed_sign_position   : req.body.DEED.jabatan_ttd_akta,
                    deed_sign_ga         : req.body.DEED.penerbit,
                    deed_note            : req.body.DEED.catatan,
                    deed_status          : "2",
                    f_checklist          : 0,
                    created_by           : "Service OSS",
                }
            })
            .then((tblfcossdeed) => {
//                res.status(201).send(tblfcossdeed)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
                err.info("[Exception Errors] - " + error);
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: Akta Service V.1
         */

    }else if(typeof req.body.NPWP !== "undefined"){
         
        /**
         * S: NPWP Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.NPWP.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossdeed
            .findOrCreate({
                where: {
                    oss_id: req.body.NPWP.oss_id,
                },
                defaults: {
                    oss_id               : req.body.NPWP.oss_id,
                    npwp_id              : 'NPWP'+formatted.toString().substr(0, 11),
                    company_id           : tblfcosshdr.company_id,
                    institute_id         : "00001",
                    reg_status           : "1",
                    lhp_no               : req.body.NPWP.no_lhp,
                    fiscal_year          : req.body.NPWP.tahun_pajak,
                    book_year            : req.body.NPWP.tahun_buku,
                    npwp_no              : req.body.NPWP.no_npwp,
                    npwp_date            : req.body.NPWP.tgl_npwp,
                    acountant_name       : req.body.NPWP.nama_bendahara,
                    accountant_divisi    : req.body.NPWP.divisi_bendahara,
                    accountant_addr      : req.body.NPWP.alamat_bendahara,
                    accountant_block     : req.body.NPWP.blok_bendahara,
                    accountant_rt        : req.body.NPWP.rt_bendahara,
                    accountant_rw        : req.body.NPWP.rw_bendahara,
                    acoountant_prop      : req.body.NPWP.prop_bendahara,
                    accountant_kab       : req.body.NPWP.kab_bendahara,
                    accountant_kec       : req.body.NPWP.kec_bendahara,
                    accountant_kel       : req.body.NPWP.kel_bendahara,
                    accountant_telp      : req.body.NPWP.telp_bendahara,
                    accountant_fax       : req.body.NPWP.fax_bendahara,
                    accountant_zip_id    : req.body.NPWP.kodepos_bendahara,
                    reference_no         : req.body.NPWP.no_referensi,
                    official_name        : req.body.NPWP.nama_pegawai,
                    official_nik         : req.body.NPWP.nik_pegawai,
                    official_npwp        : req.body.NPWP.npwp_pegawai,
                    official_addr        : req.body.NPWP.alamat_pegawai,
                    official_block       : req.body.NPWP.blok_pegawai,
                    official_rt          : req.body.NPWP.rt_pegawai,
                    official_rw          : req.body.NPWP.rw_pegawai,
                    official_prop        : req.body.NPWP.prop_pegawai,
                    official_kab         : req.body.NPWP.kab_pegawai,
                    official_kec         : req.body.NPWP.kec_pegawai,
                    official_kel         : req.body.NPWP.kel_pegawai,
                    official_zip_id      : req.body.NPWP.kodepos_pegawai,
                    official_telp        : req.body.NPWP.telp_pegawai,
                    official_fax         : req.body.NPWP.fax_pegawai,
                    official_hp          : req.body.NPWP.hp_pegawai,
                    official_email       : req.body.NPWP.email_pegawai,
                    npwp_sign_name       : req.body.NPWP.nama_ttd_npwp,
                    npwp_sign_nip        : req.body.NPWP.nip_ttd_npwp,
                    npwp_sign_date       : req.body.NPWP.tgl_ttd_npwp,
                    npwp_sign_position   : req.body.NPWP.jabatan_ttd_npwp,
                    npwp_sign_ga         : req.body.NPWP.penerbit,
                    npwp_note            : req.body.NPWP.catatan,
                    npwp_status          : "2",
                    f_checklist          : 0,
                    created_by           : "Service OSS",
                }
            })
            .then((tblfcossnpwp) => {
                //res.status(201).send(tblfcossdeed)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
                err.info("[Exception Errors] - " + error);
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: NPWP Service V.1
         */

    }else if(typeof req.body.RPTKA !== "undefined"){
         
        /**
         * S: RPTKA Service V.1
         * Edited 2018-02-19 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.RPTKA.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossrptka
            .findOrCreate({
                where: {
                    oss_id: req.body.RPTKA.oss_id,
                },
                defaults: {
                    oss_id                      : req.body.RPTKA.oss_id,
                    rptka_id                    : 'RP'+formatted.toString().substr(0, 13),
                    company_id                  : tblfcosshdr.company_id,
                    institute_id                : "00001",
                    reg_status                  : "1",
                    //institute_legal_business    : req.body.RPTKA.;
                    siup_no                     : req.body.RPTKA.no_siup,
                    siup_date                   : req.body.RPTKA.tgl_siup,
                    siup_valid                  : req.body.RPTKA.tgl_berlaku_siup,
                    rptka_no                    : req.body.RPTKA.no_rptka,
                    rptka_date                  : req.body.RPTKA.tgl_rptka,
                    rptka_sign_name             : req.body.RPTKA.nama_ttd_rptka,
                    rptka_sign_nip              : req.body.RPTKA.nip_ttd_rptka,
                    rptka_sign_date             : req.body.RPTKA.tgl_ttd_rptka,
                    rptka_sign_position         : req.body.RPTKA.jabatan_ttd_rptka,
                    rptka_sign_ga               : req.body.RPTKA.penerbit,
                    rptka_note                  : req.body.RPTKA.catatan,
                    rptka_status                : "2",
                    f_checklist                 : 0,
                    created_by                  : "Service OSS",
                }
            })
            .then((tblfcossrptka) => {
                //res.status(201).send(tblfcossdeed)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: RPTKA Service V.1
         */

    }else if(typeof req.body.TDP !== "undefined"){
        
        /**
         * S: TDP Service V.1
         * Edited 2018-02-19 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.TDP.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcosstdp
            .findOrCreate({
                where: {
                    oss_id: req.body.TDP.oss_id,
                },
                defaults: {
                    oss_id              : req.body.TDP.oss_id,
                    tdp_id              : 'TDP'+formatted.toString().substr(0, 12),
                    company_id          : tblfcosshdr.company_id,
                    institute_id        : "00001",
                    reg_status          : "1",
                    kbli_id             : req.body.TDP.kbli,
                    business_type       : req.body.TDP.bentuk_usaha,
                    date_activities     : req.body.TDP.tgl_kegiatan,
                    main_activities     : req.body.TDP.kegiatan_pokok,
                    other_activities    : req.body.TDP.kegiatan_lain,
                    patent_holder       : req.body.TDP.hak_cipta,
                    copyright_holder    : req.body.TDP.hak_paten,
                    main_comodity       : req.body.TDP.komoditi_utama,
                    other_comodity      : req.body.TDP.komoditi_lain,
                    agenda_no           : req.body.TDP.no_agenda,
                    tdp_no              : req.body.TDP.no_tdp,
                    tdp_valid_date      : req.body.TDP.tgl_berlaku_tdp,
                    tdp_date            : req.body.TDP.tgl_tdp,
                    tdp_sign_name       : req.body.TDP.nama_ttd_tdp,
                    tdp_sign_nip        : req.body.TDP.nip_ttd_tdp,
                    tdp_sign_date       : req.body.TDP.tgl_ttd_tdp,
                    tdp_sign_position   : req.body.TDP.jabatan_ttd_tdp,
                    tdp_sign_ga         : req.body.TDP.penerbit,
                    tdp_note            : req.body.TDP.catatan,
                    tdp_status          : "2",
                    f_checklist          : 0,
                    created_by           : "Service OSS",
                }
            })
            .then((tblfcosstdp) => {
                //res.status(201).send(tblfcosstdp)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
                err.info("[Exception Errors] - " + error);
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });


        /**
         * E: TDP Service V.1
         */

    }else if(typeof req.body.IMTA !== "undefined"){
        
        /**
         * S: IMTA Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.IMTA.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossimta
            .findOrCreate({
                where: {
                    oss_id: req.body.IMTA.oss_id,
                },
                defaults: {
                    oss_id               : req.body.IMTA.oss_id,
                    imta_id              : 'IMTA'+formatted.toString().substr(0, 12),
                    company_id           : tblfcosshdr.company_id,
                    institute_id         : "00001",
                    reg_status           : "1",
                    fullname             : req.body.IMTA.nama_lengkap,
                    gender               : req.body.IMTA.jenis_kelamin,
                    born_place           : req.body.IMTA.tempat_lahir,
                    born_date            : req.body.IMTA.tgl_lahir,
                    origin_address       : req.body.IMTA.alamat,
                    country              : req.body.IMTA.negara,
                    current_address      : req.body.IMTA.alamat_tinggal,
                    block                : req.body.IMTA.blok,
                    rt                   : req.body.IMTA.rt,
                    rw                   : req.body.IMTA.rw,
                    prop                 : req.body.IMTA.prop,
                    kab                  : req.body.IMTA.kab,
                    kec                  : req.body.IMTA.kec,
                    kel                  : req.body.IMTA.kel,
                    visa_type            : req.body.IMTA.tipe_visa,
                    visa_no              : req.body.IMTA.no_visa,
                    visa_date            : req.body.IMTA.tgl_visa,
                    visa_valid           : req.body.IMTA.tgl_berlaku_visa,
                    kim_no               : req.body.IMTA.no_kim,
                    kim_date             : req.body.IMTA.tgl_kim,
                    kim_valid            : req.body.IMTA.tgl_berlaku_kim,
                    stmd_no              : req.body.IMTA.no_stmd,
                    stmd_date            : req.body.IMTA.tgl_stmd,
                    stmd_valid           : req.body.IMTA.tgl_berlaku_stmd,
                    skk_no               : req.body.IMTA.no_skk,
                    skk_date             : req.body.IMTA.tgl_skk,
                    skk_valid            : req.body.IMTA.tgl_berlaku_skk,
                    position             : req.body.IMTA.jabatan,
                    position_level       : req.body.IMTA.level_jabatan,
                    education            : req.body.IMTA.pendidikan,
                    work_experience      : req.body.IMTA.pengalaman_kerja,
                    work_place           : req.body.IMTA.tempat_kerja,
                    work_prop            : req.body.IMTA.prop_kerja,
                    work_kab             : req.body.IMTA.kab_kerja,
                    work_kec             : req.body.IMTA.kec_kerja,
                    work_kel             : req.body.IMTA.kel_kerja,
                    contract_start       : req.body.IMTA.mulai_kontrak,
                    contract_finish      : req.body.IMTA.selesai_kontrak,
                    fas_home             : req.body.IMTA.fas_rumah,
                    fas_vehicle          : req.body.IMTA.fas_kendaraan,
                    salary               : req.body.IMTA.gaji,
                    notes                : req.body.IMTA.catatan,
                    imta_no              : req.body.IMTA.no_imta,
                    imta_date            : req.body.IMTA.tgl_api,
                    imta_sign_name       : req.body.IMTA.tgl_imta,
                    imta_sign_nip        : req.body.IMTA.nip_ttd_imta,
                    imta_sign_date       : req.body.IMTA.tgl_ttd_imta,
                    imta_sign_position   : req.body.IMTA.jabatan_ttd_imta,
                    imta_sign_ga         : req.body.IMTA.penerbit,
                    imta_note            : req.body.IMTA.catatan,
                    imta_status          : "2",
                    f_checklist         : 0,
                }
            })
            .then((tblfcossimta) => {
                //res.status(201).send(tblfcossimta)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: IMTA Service V.1
         */

    }else if(typeof req.body.API !== "undefined"){
        
        /**
         * S: API Service V.1
         * Edited 2018-02-19 by Herdian Bagus W 
         * 
         * 114.4.132.39
         *  
         * 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.API.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossapi
            .findOrCreate({
                where: {
                    oss_id: req.body.API.oss_id,
                },
                defaults: {
                    oss_id              : req.body.API.oss_id,
                    api_id              : req.body.API.id_api, //'API'+formatted.toString().substr(0, 12),
                    company_id          : tblfcosshdr.company_id,
                    institute_id        : "00001",
                    reg_status          : "1",
                    request_no          : req.body.API.no_permohonan,
                    request_date        : req.body.API.tgl_permohonan,
                    no_reff_bank        : req.body.API.no_referensi_bank,
                    date_reff_bank      : req.body.API.tgl_referensi_bank,
                    api_no              : req.body.API.no_api,
                    api_date            : req.body.API.tgl_api,
                    api_sign_name       : req.body.API.nama_ttd_api,
                    api_sign_nip        : req.body.API.nip_ttd_api,
                    api_sign_date       : req.body.API.tgl_ttd_api,
                    api_sign_position   : req.body.API.jabatan_ttd_api,
                    api_sign_ga         : req.body.API.penerbit,
                    api_note            : req.body.API.catatan,
                    api_status          : "2",
                    f_checklist         : 0,
                }
            })
            .then((tblfcossapi) => {
                //res.status(201).send(tblfcossapi)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
                err.info("[Exception Errors] - " + error);
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: API Service V.1
         */

    }else if(typeof req.body.NIK !== "undefined"){
        
        /**
         * S: NIK Service V.1
         * Edited 2018-02-19 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.NIK.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossnik
            .findOrCreate({
                where: {
                    oss_id: req.body.NIK.oss_id,
                },
                defaults: {
                    oss_id                  : req.body.NIK.oss_id,
                    api_id                  : 'NIK'+formatted.toString().substr(0, 12),
                    company_id              : tblfcosshdr.company_id,
                    institute_id            : "00001",
                    reg_status              : "1",
                    revenue                 : req.body.NIK.pendapatan,
                    gross_revenue           : req.body.NIK.pendapatan_kotor,
                    current_assets          : req.body.NIK.aset,
                    fixed_assets            : req.body.NIK.aset_tetap,
                    other_assets            : req.body.NIK.aset_lain,
                    total_assets            : req.body.NIK.total_aset,
                    long_term_debit         : req.body.NIK.hutang_jangka_panjang,
                    short_term_debt         : req.body.NIK.hutang_jangka_pendek,
                    total_debt              : req.body.NIK.total_hutang,
                    retained_earnings       : req.body.NIK.piutang,
                    total_capital           : req.body.NIK.total_modal,
                    public_accountant       : req.body.NIK.akuntan_publik,
                    public_report           : req.body.NIK.laporan_publik,
                    public_opinion          : req.body.NIK.pendapat_publik,
                    bc_lha_no               : req.body.NIK.no_lha_bc,
                    bc_report               : req.body.NIK.laporan_bc,
                    bc_opinion              : req.body.NIK.pendapat_bc,
                    sys_accountant          : req.body.NIK.sistem_akuntan,
                    f_it_inventory          : req.body.NIK.it_inventori,
                    customs_expert          : req.body.NIK.ahli_pabean,
                    certificate_seri_no     : req.body.NIK.noseri_sertifikat,
                    certficate_no           : req.body.NIK.no_sertifikat,
                    ship_name               : req.body.NIK.nama_kapal,
                    ship_noreg              : req.body.NIK.noreg_kapal,
                    ship_capacity           : req.body.NIK.kapasitas_kapal,
                    ship_route_type         : req.body.NIK.tipe_rute_kapal,
                    ship_route_from         : req.body.NIK.rute_asal_kapal,
                    ship_from_to            : req.body.NIK.rute_tujuan_kapal,
                    plane_name              : req.body.NIK.nama_pesawat,
                    plane_noreg             : req.body.NIK.noreg_pesawat,
                    plane_capacity          : req.body.NIK.kapasitas_pesawat,
                    plane_route_type        : req.body.NIK.tipe_rute_pesawat,
                    plane_route_from        : req.body.NIK.rute_asal_pesawat,
                    plane_route_to          : req.body.NIK.rute_tujuan_pesawat,
                    skep_no_tps             : req.body.NIK.no_skep_tps,
                    type_tps                : req.body.NIK.tipe_tps,
                    pjt_permit_post         : req.body.NIK.izin_pjt,
                    pjt_expert_name         : req.body.NIK.nama_ahli_pjt,
                    pjt_expert_position     : req.body.NIK.jabatan_ahli_pjt,
                    pjt_certificate_seri    : req.body.NIK.noseri_sertifikat_pjt,
                    pjt_certificate_no      : req.body.NIK.no_sertifikat_pjt,
                    iso_certificate_no      : req.body.NIK.no_sertifkat_iso,
                    iso_certificate_date    : req.body.NIK.tgl_sertifikat_iso,
                    iso_certificate_valid   : req.body.NIK.tgl_berlaku_sertifikat_iso,
                    iso_publisher           : req.body.NIK.penerbit_iso,
                    other_expert_name       : req.body.NIK.nama_ahli_lain,
                    other_expert_position   : req.body.NIK.jabatan_ahli_lain,
                    other_certificate_seri  : req.body.NIK.noseri_sertifikat_lain,
                    other_certificate_no    : req.body.NIK.no_sertifikat_lain,
                    member_association      : req.body.NIK.anggota_asosiasi,
                    survey_result           : req.body.NIK.hasil_survey,
                    survey_note             : req.body.NIK.catatan_survey,
                    nik_no                  : req.body.NIK.no_nik,
                    nik_date                : req.body.NIK.tgl_nik,
                    nik_sign_name           : req.body.NIK.nama_ttd_nik,
                    nik_sign_nip            : req.body.NIK.nip_ttd_nik,
                    nik_sign_date           : req.body.NIK.tgl_ttd_nik,
                    nik_sign_position       : req.body.NIK.jabatan_ttd_nik,
                    nik_sign_ga             : req.body.NIK.penerbit,
                    nik_note                : req.body.NIK.catatan,
                    nik_status              : "2",
                    f_checklist             : 0,
                }
            })
            .then((tblfcossnik) => {
                //res.status(201).send(tblfcossnik)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: NIK Service V.1
         */

    }else if(typeof req.body.LOKASI !== "undefined"){
        
        /**
         * S: LOCATION Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.LOKASI.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcosslocation
            .findOrCreate({
                where: {
                    oss_id: req.body.LOK.oss_id,
                },
                defaults: {
                    oss_id               : req.body.LOKASI.oss_id,
                    loc_id               : 'LOC'+formatted.toString().substr(0, 12),
                    company_id           : tblfcosshdr.company_id,
                    institute_id         : "00001",
                    reg_status           : "1",
                    area_size            : req.body.LOKASI.luas_wilayah, 
                    area_prop            : req.body.LOKASI.prop_wilayah,
                    area_kab             : req.body.LOKASI.kab_wilayah,
                    area_kec             : req.body.LOKASI.kec_wilayah,
                    area_kel             : req.body.LOKASI.kel_wilayah,
                    land_status          : req.body.LOKASI.status_tanah,
                    land_use_now         : req.body.LOKASI.fungsi_tanah_sekarang, //sekarng = harusnya sekarang
                    land_use_plan        : req.body.LOKASI.fungsi_tanah_nanti,
                    loc_east             : req.body.LOKASI.batas_wilayah_timur,
                    loc_north            : req.body.LOKASI.batas_wilayah_utara,
                    loc_west             : req.body.LOKASI.batas_wilayah_barat,
                    loc_south            : req.body.LOKASI.batas_wilayah_selatan,
                    loc_no               : req.body.LOKASI.no_lokasi,
                    loc_date             : req.body.LOKASI.tgl_lokasi,
                    loc_sign_name        : req.body.LOKASI.nama_ttd_lokasi,
                    loc_sign_nip         : req.body.LOKASI.nip_ttd_lokasi,
                    loc_sign_date        : req.body.LOKASI.tgl_ttd_lokasi,
                    loc_sign_position    : req.body.LOKASI.jabatan_ttd_lokasi,
                    loc_sign_ga          : req.body.LOKASI.penerbit,
                    loc_note             : req.body.LOKASI.catatan,
                    loc_status           : "2",
                    f_checklist          : 0,
                }
            })
            .then((tblfcosslocation) => {
                //res.status(201).send(tblfcosslocation)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: LOCATION Service V.1
         */

    }else if(typeof req.body.IMB !== "undefined"){
        
        /**
         * S: IMB Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.IMB.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossimb
            .findOrCreate({
                where: {
                    oss_id: req.body.IMB.oss_id,
                },
                defaults: {
                    oss_id                 : req.body.IMB.oss_id,
                    loc_id                 : 'LOC'+formatted.toString().substr(0, 12),
                    company_id             : tblfcosshdr.company_id,
                    institute_id           : "00001",
                    reg_status             : "1",
                    imb_no                 : req.body.IMB.no_imb,
                    imb_date               : req.body.IMB.tgl_imb,
                    building_construction  : req.body.IMB.konstruksi,
                    building_type          : req.body.IMB.tipe_bangunan,
                    imb_sign_name          : req.body.IMB.nama_ttd_imb,
                    imb_sign_nip           : req.body.IMB.nip_ttd_imb,
                    imb_sign_date          : req.body.IMB.tgl_ttd_imb,
                    imb_sign_position      : req.body.IMB.jabatan_ttd_imb,
                    imb_sign_ga            : req.body.IMB.penerbit,
                    imb_note               : req.body.IMB.catatan,
                    loc_status             : "2",
                    f_checklist            : 0,
                }
            })
            .then((tblfcossimb) => {
                //res.status(201).send(tblfcossimb)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: IMB Service V.1
         */

    }else if(typeof req.body.MERK !== "undefined"){
        
        /**
         * S: MERK Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.MERK.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossmerk
            .findOrCreate({
                where: {
                    oss_id: req.body.MERK.oss_id,
                },
                defaults: {
                    oss_id                  : req.body.MERK.oss_id,
                    iui_id                  : 'LOC'+formatted.toString().substr(0, 12),
                    company_id              : tblfcosshdr.company_id,
                    institute_id            : "00001",
                    reg_status              : "1",
                    warehouse_size          : req.body.MERK.luas_gudang,
                    build_percent           : req.body.MERK.bangunan_persen,
                    real_equip_impor        : req.body.MERK.peralatan_impor,
                    real_equip_local        : req.body.MERK.peralatan_lokal,
                    real_machine            : req.body.MERK.mesin,
                    factory_construct       : req.body.MERK.pabrik_mulai,
                    production_construct    : req.body.MERK.produksi_mulai,
                    local_market_percent    : req.body.MERK.pasar_lokal_persen,
                    export_market_percent   : req.body.MERK.pasar_ekspor_persen,
                    merk_percent            : req.body.MERK.merk_persen,
                    merk_no                 : req.body.MERK.no_iui,
                    merk_date               : req.body.MERK.tgl_iui,
                    merk_sign_name          : req.body.MERK.nama_ttd_iui,
                    merk_sign_nip           : req.body.MERK.nip_ttd_iui,
                    merk_sign_date          : req.body.MERK.tgl_ttd_iui,
                    merk_sign_position      : req.body.MERK.jabatan_ttd_iui,
                    merk_sign_ga            : req.body.MERK.penerbit,
                    merk_note               : req.body.MERK.catatan,
                    loc_status             : "2",
                    f_checklist            : 0,
                }
            })
            .then((tblfcossmerk) => {
                //res.status(201).send(tblfcossmerk)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: MERK Service V.1
         */

    }else if(typeof req.body.IUI !== "undefined"){
        
        /**
         * S: IUI Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.IUI.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcossiui
            .findOrCreate({
                where: {
                    oss_id: req.body.IUI.oss_id,
                },
                defaults: {
                    oss_id                 : req.body.IUI.oss_id,
                    iui_id                 : 'LOC'+formatted.toString().substr(0, 12),
                    company_id             : tblfcosshdr.company_id,
                    institute_id           : "00001",
                    reg_status             : "1",

                    warehouse_size         : req.body.IUI.luas_gudang,
                    build_percent          : req.body.IUI.bangunan_persen,
                    real_equip_impor       : req.body.IUI.peralatan_impor,
                    real_equip_local       : req.body.IUI.peralatan_lokal,
                    real_machine           : req.body.IUI.mesin,
                    factory_construct      : req.body.IUI.pabrik_mulai,
                    production_construct   : req.body.IUI.produksi_mulai,
                    local_market_percent   : req.body.IUI.pasar_lokal_persen,
                    export_market_percent  : req.body.IUI.pasar_ekspor_persen,
                    merk_percent           : req.body.IUI.merk_persen,

                    iui_no                 : req.body.IUI.no_iui,
                    iui_date               : req.body.IUI.tgl_iui,
                    iui_sign_name          : req.body.IUI.nama_ttd_iui,
                    iui_sign_nip           : req.body.IUI.nip_ttd_iui,
                    iui_sign_date          : req.body.IUI.tgl_ttd_iui,
                    iui_sign_position      : req.body.IUI.jabatan_ttd_iui,
                    iui_sign_ga            : req.body.IUI.penerbit,
                    iui_note               : req.body.IUI.catatan,
                    loc_status             : "2",
                    f_checklist            : 0,
                }
            })
            .then((tblfcossiui) => {
                //res.status(201).send(tblfcossiui)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: IUI Service V.1
         */

    }else if(typeof req.body.SNI !== "undefined"){
        
        /**
         * S: SNI Service V.1
         * Edited 2018-02-20 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.SNI.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcosssni
            .findOrCreate({
                where: {
                    oss_id: req.body.SNI.oss_id,
                },
                defaults: {
                    oss_id                 : req.body.SNI.oss_id,
                    tdup_id                : 'LOC'+formatted.toString().substr(0, 12),
                    company_id             : tblfcosshdr.company_id,
                    institute_id           : "00001",
                    reg_status             : "1",

                    sni_no                 : req.body.SNI.no_iui,
                    sni_date               : req.body.SNI.tgl_iui,
                    sni_sign_name          : req.body.SNI.nama_ttd_iui,
                    sni_sign_nip           : req.body.SNI.nip_ttd_iui,
                    sni_sign_date          : req.body.SNI.tgl_ttd_iui,
                    sni_sign_position      : req.body.SNI.jabatan_ttd_iui,
                    sni_sign_ga            : req.body.SNI.penerbit,
                    sni_note               : req.body.SNI.catatan,
                    loc_status             : "2",
                    f_checklist            : 0,
                }
            })
            .then((tblfcosssni) => {
                //res.status(201).send(tblfcosssni)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: SNI Service V.1
         */

    }else if(typeof req.body.TDUP !== "undefined"){
        
        /**
         * S: TDUP Service V.1
         * Edited 2018-03-08 by Herdian Bagus W 
         */

        Tblfcosshdr.findOne({
            where: {
              oss_id: req.body.TDUP.oss_id,
            }
        }).then((tblfcosshdr) => {

            return Tblfcosstdup
            .findOrCreate({
                where: {
                    oss_id: req.body.TDUP.oss_id,
                },
                defaults: {
                    oss_id                 : req.body.TDUP.oss_id,
                    tdup_id                : 'TDUP'+formatted.toString().substr(0, 11),
                    company_id             : tblfcosshdr.company_id,
                    institute_id           : "00001",
                    reg_status             : "1",
                    business_sector        : req.body.TDUP.bidang_usaha,
                    business_type_sector   : req.body.TDUP.jenis_usaha,
                    business_sub_sector    : req.body.TDUP.sub_jenis_usaha,
                    business_name          : req.body.TDUP.nama_usaha,
                    business_wide_area     : req.body.TDUP.luas_tempat_usaha,
                    business_capacity      : req.body.TDUP.kapasitas_usaha,
                    address                : req.body.TDUP.alamat_usaha,
                    prop                   : req.body.TDUP.prop_usaha,
                    kab                    : req.body.TDUP.kab_usaha,
                    kec                    : req.body.TDUP.kec_usaha,
                    kel                    : req.body.TDUP.kel_usaha,
                    tdup_no                : req.body.TDUP.no_tdup,
                    tdup_date              : req.body.TDUP.tgl_tdup,
                    tdup_sign_name         : req.body.TDUP.nama_ttd_tdup,
                    tdup_sign_nip          : req.body.TDUP.nip_ttd_tdup,
                    tdup_sign_date         : req.body.TDUP.tgl_ttd_tdup,
                    tdup_sign_position     : req.body.TDUP.jabatan_ttd_tdup,
                    tdup_sign_ga           : req.body.TDUP.penerbit,
                    tdup_note              : req.body.TDUP.catatan,
                    tdup_status            : 2,
                    f_checklist            : 0,
                }
            })
            .then((tblfcosstdup) => {
                //res.status(201).send(tblfcosstdup)
                res.status(201).json({"code":"00", "data" : {"message":"Success"} })
            }).catch((error) => {
                err.info("[Exception Errors] - " + error);
                res.status(400).json({"code":"99", "data" : {"message":"Exception Errors"} });
            });

        }).catch((error) => {
            err.info("[OSSID Can't Find in System] - " + error);
            res.status(400).json({"code":"09", "data" : {"message":"OSSID Can't Find in System"} });
        });
        
        /**
         * E: TDUP Service V.1
         */

    }else{
        res.status(404).json({"code":"27", "data" : {"message":"Method not Found"} });
        err.info("[Method not Found]");
    }

  };
  
// sequelize-auto -h 10.1.2.87 -d oss -u ossuser -x db0ss2017 -p 3306 --dialect "mysql" -c "./api/config/config.json" -o "./api/models" npm install -g mysql