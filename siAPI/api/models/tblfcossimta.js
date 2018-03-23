/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossimta', {
		imta_id: {
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
		reg_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		fullname: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		gender: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		born_place: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		born_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		origin_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		current_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		block: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		rt: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		rw: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		kab: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		visa_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		visa_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		visa_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		visa_valid: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		kim_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		kim_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		kim_valid: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		stmd_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		stmd_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		stmd_valid: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		skk_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		skk_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		skk_valid: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		position_level: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		education: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		work_experience: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		work_place: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		work_prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		work_kab: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		work_kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		work_kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		contract_start: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		contract_finish: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		fas_home: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
		},
		fas_vehicle: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
		},
		salary: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		notes: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		imta_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		imta_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		imta_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imta_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		imta_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		imta_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imta_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		imta_status: {
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
		tableName: 'tblfcossimta',
		timestamps: false
	});
};
