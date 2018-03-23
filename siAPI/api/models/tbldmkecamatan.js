/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmkecamatan', {
		kec_id: {
			type: DataTypes.CHAR(7),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		kec_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'tbldmkecamatan'
	});
};
