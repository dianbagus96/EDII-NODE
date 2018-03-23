/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossiui', {
		iui_id: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		oss_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		company_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		institute_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		reg_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		warehouse_size: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		build_percent: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		real_equip_impor: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		real_equip_local: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		real_machine: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		factory_construct: {
			type: DataTypes.DATE,
			allowNull: true
		},
		production_construct: {
			type: DataTypes.DATE,
			allowNull: true
		},
		local_market_percent: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		export_market_percent: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		merk_percent: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		iui_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		iui_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		iui_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		iui_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		iui_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		iui_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		iui_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		iui_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		iui_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		f_checklist: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
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
		tableName: 'tblfcossiui',
		timestamps: false
	});
};
