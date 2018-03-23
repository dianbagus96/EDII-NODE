/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosstracking', {
		tracking_id: {
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
		permit_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		permit_status: {
			type: DataTypes.CHAR(1),
			allowNull: true
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
		tableName: 'tblfcosstracking',
		timestamps: false
	});
};
