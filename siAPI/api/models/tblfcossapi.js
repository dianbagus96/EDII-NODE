/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossapi', {
		api_id: {
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
		request_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		request_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		no_reff_bank: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		date_reff_bank: {
			type: DataTypes.DATE,
			allowNull: true
		},
		api_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		api_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		api_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		api_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		api_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		api_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		api_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		api_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		api_status: {
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
		tableName: 'tblfcossapi',
		timestamps: false
	});
};
