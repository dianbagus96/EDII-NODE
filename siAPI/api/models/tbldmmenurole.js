/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmmenurole', {
		group_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			references: {
				model: 'tbldmgroup',
				key: 'group_id'
			}
		},
		role_id: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		menu_id: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			primaryKey: true
		},
		menu_grant: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'W'
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
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tbldmmenurole'
	});
};
