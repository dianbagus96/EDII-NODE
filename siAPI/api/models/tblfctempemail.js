/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfctempemail', {
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
			type: DataTypes.STRING(255),
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
		}
	}, {
		tableName: 'tblfctempemail'
	});
};
