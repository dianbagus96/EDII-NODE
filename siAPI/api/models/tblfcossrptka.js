/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossrptka', {
		rptka_id: {
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
		institute_legal_business: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		reg_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		siup_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		siup_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		siup_valid: {
			type: DataTypes.DATE,
			allowNull: true
		},
		rptka_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		rptka_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		rptka_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		rptka_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		rptka_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		rptka_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		rptka_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		rptka_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		rptka_status: {
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
		tableName: 'tblfcossrptka',
		timestamps: false
	});
};
