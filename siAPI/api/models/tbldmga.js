/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmga', {
		ga_id: {
			type: DataTypes.STRING(2),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		ga_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		ga_fullname: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		ga_shortname: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		ga_order: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		ga_logo: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		ga_address: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		ga_desc: {
			type: DataTypes.STRING(500),
			allowNull: false,
			defaultValue: ''
		},
		ga_general: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		ga_latlng: {
			type: DataTypes.STRING(25),
			allowNull: false
		}
	}, {
		tableName: 'tbldmga'
	});
};
