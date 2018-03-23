/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossiuiprod', {
		iui_prod_id: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		iui_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		capacity_ready: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		capacity_year: {
			type: "YEAR(4)",
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
		tableName: 'tblfcossiuiprod',
		timestamps: false
	});
};
