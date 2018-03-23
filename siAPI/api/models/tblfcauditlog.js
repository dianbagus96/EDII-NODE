/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcauditlog', {
		log_no: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		menu_id: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: ''
		},
		reference: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: ''
		},
		activity: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ip: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'tblfcauditlog'
	});
};
