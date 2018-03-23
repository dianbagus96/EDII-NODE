/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmbank', {
		bank_id: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bank_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		created_by: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: 'DBA'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'tbldmbank'
	});
};
