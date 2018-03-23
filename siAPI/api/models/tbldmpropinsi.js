/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmpropinsi', {
		prop_id: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		prop_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		nsw_id: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'tbldmpropinsi'
	});
};
