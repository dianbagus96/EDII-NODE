/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossimb', {
		imb_id: {
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
			type: DataTypes.STRING(100),
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
		imb_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		imb_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		building_construction: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		building_type: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imb_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imb_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		imb_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		imb_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imb_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		imb_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imb_status: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: '2'
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
		tableName: 'tblfcossimb',
		timestamps: false
	});
};
