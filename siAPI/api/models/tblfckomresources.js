/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfckomresources', {
		resources_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		},
		icon: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: ''
		},
		created_by: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		created_date: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		updated_by: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		updated_date: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'tblfckomresources'
	});
};
