/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossdeed', {
		deed_id: {
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
		notaris_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		deed_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		deed_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deed_sign_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		deed_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		deed_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		deed_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deed_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		deed_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		deed_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		deed_status: {
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
		tableName: 'tblfcossdeed',
		timestamps: false
	});
};
