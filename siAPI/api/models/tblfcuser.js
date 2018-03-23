/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcuser', {
		user_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		name: {
			type: DataTypes.CHAR(30),
			allowNull: true
		},
		username: {
			type: DataTypes.CHAR(32),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		password: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		rand_pass: {
			type: DataTypes.CHAR(75),
			allowNull: true
		},
		role: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		email: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		group: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		status: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
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
		tableName: 'tblfcuser'
	});
};
