/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmgroupkomoditi', {
		hs2digit: {
			type: DataTypes.CHAR(3),
			allowNull: false,
			primaryKey: true
		},
		desc_en: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		desc_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		jumlah: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'tbldmgroupkomoditi'
	});
};
