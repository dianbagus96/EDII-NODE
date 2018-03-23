/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmzipcode', {
		zip_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		kel_id: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		kec_id: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		kab_id: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		prop_id: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		zip_code: {
			type: DataTypes.STRING(5),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'tbldmzipcode'
	});
};
