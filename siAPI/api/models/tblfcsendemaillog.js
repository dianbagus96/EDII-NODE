/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcsendemaillog', {
		id_temp: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		to: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subject: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		bcc: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		file: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.CHAR(10),
			allowNull: true,
			defaultValue: 'WEB'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'tblfcsendemaillog'
	});
};
