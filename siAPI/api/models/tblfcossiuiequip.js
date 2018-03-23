/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossiuiequip', {
		iui_equip_id: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		iui_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		equip_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		equip_total: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		capacity_ready: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		equip_merk: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		equip_year: {
			type: "YEAR(4)",
			allowNull: true
		},
		country: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		cost: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		notes: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		created_by: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tblfcossiuiequip',
		timestamps: false
	});
};
