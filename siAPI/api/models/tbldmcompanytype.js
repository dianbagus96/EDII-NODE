/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmcompanytype', {
		comp_type_id: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		name: {
			type: DataTypes.CHAR(25),
			allowNull: false,
			defaultValue: ''
		},
		short_name: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		print_name: {
			type: DataTypes.CHAR(10),
			allowNull: true
		}
	}, {
		tableName: 'tbldmcompanytype'
	});
};
