/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmgroupkbli', {
		group_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		group_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		notes: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		kbli_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		year: {
			type: DataTypes.STRING(4),
			allowNull: false,
			defaultValue: '2015',
			primaryKey: true
		}
	}, {
		tableName: 'tbldmgroupkbli'
	});
};
