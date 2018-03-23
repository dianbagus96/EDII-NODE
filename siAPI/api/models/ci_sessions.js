/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ci_sessions', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		ip_address: {
			type: DataTypes.STRING(45),
			allowNull: false,
			primaryKey: true
		},
		timestamp: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		data: {
			type: "BLOB",
			allowNull: false
		}
	}, {
		tableName: 'ci_sessions'
	});
};
