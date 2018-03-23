/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfckombusiness', {
		business_type_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		code: {
			type: DataTypes.CHAR(5),
			allowNull: true,
			defaultValue: ''
		},
		parent_id: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
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
		tableName: 'tblfckombusiness'
	});
};
