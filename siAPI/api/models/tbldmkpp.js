/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmkpp', {
		kpp_id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		kode: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		contact: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'tbldmkpp'
	});
};
