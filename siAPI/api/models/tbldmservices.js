/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmservices', {
		services_id: {
			type: DataTypes.CHAR(3),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		services_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		flow: {
			type: DataTypes.INTEGER(1),
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
		tableName: 'tbldmservices'
	});
};
