/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossnpwp', {
		npwp_id: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		oss_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		company_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		institute_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		lhp_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		reg_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		fiscal_year: {
			type: "YEAR(4)",
			allowNull: true
		},
		book_year: {
			type: "YEAR(4)",
			allowNull: true
		},
		npwp_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		npwp_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		acountant_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		accountant_divisi: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		accountant_addr: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		accountant_block: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		accountant_rt: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		accountant_rw: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		acoountant_prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		accountant_kab: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		accountant_kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		accountant_kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		accountant_telp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		accountant_fax: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		accountant_zip_id: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		reference_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		official_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		official_nik: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		official_npwp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		official_addr: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		official_block: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		official_rt: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		official_rw: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		official_prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		official_kab: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		official_kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		official_kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		official_zip_id: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		official_telp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		official_fax: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		official_hp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		official_email: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		npwp_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		npwp_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		npwp_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		npwp_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		npwp_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		npwp_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		npwp_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		f_checklist: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		created_by: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tblfcossnpwp',
		timestamps: false
	});
};
