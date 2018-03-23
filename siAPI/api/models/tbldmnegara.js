/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmnegara', {
		id: {
			type: DataTypes.STRING(2),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'tbldmnegara'
	});
};
