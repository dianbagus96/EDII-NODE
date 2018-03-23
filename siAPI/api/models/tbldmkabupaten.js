/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmkabupaten', {
		kab_id: {
			type: DataTypes.CHAR(4),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		kab_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		full_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'KAB.'
		},
		area_code: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nsw_id: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'tbldmkabupaten'
	});
};
