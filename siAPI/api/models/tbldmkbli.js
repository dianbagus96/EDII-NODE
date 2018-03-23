/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmkbli', {
		kbli_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		kbli_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		year: {
			type: DataTypes.STRING(4),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		revisi: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		fl_siup: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		group_kbli: {
			type: DataTypes.CHAR(5),
			allowNull: true
		}
	}, {
		tableName: 'tbldmkbli'
	});
};
