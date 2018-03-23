/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmcurrency', {
		currency_id: {
			type: DataTypes.CHAR(3),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		currency_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'tbldmcurrency'
	});
};
