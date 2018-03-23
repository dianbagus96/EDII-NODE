/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmcountry', {
		country_id: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		country_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'tbldmcountry'
	});
};
