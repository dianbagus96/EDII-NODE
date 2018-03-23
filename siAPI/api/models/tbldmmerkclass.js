/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmmerkclass', {
		merk_class_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		serial_no_e: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		merk_group: {
			type: DataTypes.INTEGER(8),
			allowNull: true
		},
		item_name: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: ''
		},
		basic_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		serial_no_fr: {
			type: DataTypes.STRING(50),
			allowNull: true
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
		tableName: 'tbldmmerkclass'
	});
};
