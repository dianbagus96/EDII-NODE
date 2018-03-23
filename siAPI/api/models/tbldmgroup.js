/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmgroup', {
		group_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		group_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true,
			defaultValue: 'DBA'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.CHAR(32),
			allowNull: true,
			defaultValue: 'DBA'
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tbldmgroup'
	});
};
