/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblref', {
		group_ref: {
			type: DataTypes.CHAR(30),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		kd_ref: {
			type: DataTypes.CHAR(10),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		parent: {
			type: DataTypes.CHAR(20),
			allowNull: true
		},
		uraian: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		note: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tblref'
	});
};
