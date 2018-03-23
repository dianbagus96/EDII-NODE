/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmmerkgroup', {
		merk_group: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		merk_class: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		merk_desc: {
			type: DataTypes.STRING(250),
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
		tableName: 'tbldmmerkgroup'
	});
};
