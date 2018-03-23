/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmkomissue', {
		issue_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
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
		tableName: 'tbldmkomissue'
	});
};
