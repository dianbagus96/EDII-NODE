/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('b', {
		filed: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'b'
	});
};
