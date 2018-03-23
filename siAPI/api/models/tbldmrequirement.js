/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmrequirement', {
		req_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		req_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		file_type: {
			type: DataTypes.CHAR(2),
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
		},
		updated_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tbldmrequirement'
	});
};
