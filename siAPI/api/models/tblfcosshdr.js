/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosshdr', {
		oss_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		permit_group: {
			type: DataTypes.CHAR(5),
			allowNull: true,
			defaultValue: 'KI'
		},
		oss_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		applicant_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		last_permit: {
			type: DataTypes.CHAR(6),
			allowNull: true
		},
		f_prepare: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: '0'
		},
		f_construction: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: '0'
		},
		f_production: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: '0'
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true,
			defaultValue: 'Administrator'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tblfcosshdr',
		timestamps: false
	});
};
