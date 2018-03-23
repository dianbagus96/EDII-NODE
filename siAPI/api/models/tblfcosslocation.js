/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosslocation', {
		loc_id: {
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
		area_size: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		area_prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		area_kab: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		area_kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		area_kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		land_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		land_use_now: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		land_use_plan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_east: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_north: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_west: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_south: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		loc_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		loc_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		loc_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		loc_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		loc_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		loc_status: {
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
		tableName: 'tblfcosslocation',
		timestamps: false
	});
};
