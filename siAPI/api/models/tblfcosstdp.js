/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosstdp', {
		tdp_id: {
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
		company_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		company_type: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		company_addr: {
			type: DataTypes.STRING(250),
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
		kbli_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		business_type: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		date_activities: {
			type: DataTypes.DATE,
			allowNull: true
		},
		main_activities: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		other_activies: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		patent_holder: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		copyright_holder: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		main_comodity: {
			type: DataTypes.CHAR(3),
			allowNull: true
		},
		other_comodity: {
			type: DataTypes.CHAR(3),
			allowNull: true
		},
		agenda_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdp_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		tdp_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tdp_valid_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tdp_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdp_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		tdp_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tdp_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdp_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		tdp_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdp_status: {
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
		},
		npwp: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'tblfcosstdp',
		timestamps: false
	});
};
