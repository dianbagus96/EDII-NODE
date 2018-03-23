/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('a', {
		field: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'a'
	});
};
