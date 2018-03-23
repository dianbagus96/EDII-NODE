/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanybusiness', {
		business_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		project_sch: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		est_export: {
			type: "DOUBLE(18,2)",
			allowNull: true
		},
		currency: {
			type: DataTypes.CHAR(3),
			allowNull: true
		},
		line_business: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		kbli_id: {
			type: DataTypes.CHAR(6),
			allowNull: true
		},
		prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		kab: {
			type: DataTypes.CHAR(4),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		land_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		land_required: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		imp_male: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		imp_female: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		imp_total: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		fmp_total: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		purchase_land: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		building: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		building_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		machine_equip: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		machine_equip_us: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		others: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		working_capital: {
			type: "DOUBLE(18,2)",
			allowNull: true
		},
		total_invest: {
			type: "DOUBLE(18,2)",
			allowNull: true
		},
		total_omset: {
			type: "DOUBLE(18,2)",
			allowNull: true
		},
		total_asset: {
			type: "DOUBLE(18,2)",
			allowNull: true
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true,
			defaultValue: 'Administrator'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
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
		tableName: 'tblfccompanybusiness',
		timestamps: false
	});
};
