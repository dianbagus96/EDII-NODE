/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldminstitute', {
		institute_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		ga_id: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		institute_name: {
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
		tableName: 'tbldminstitute'
	});
};
