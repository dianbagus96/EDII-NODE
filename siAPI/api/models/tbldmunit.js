/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmunit', {
		unit_id: {
			type: DataTypes.STRING(3),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		unit_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'tbldmunit'
	});
};
