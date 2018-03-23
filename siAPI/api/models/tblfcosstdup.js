/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosstdup', {
		tdup_id: {
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
		business_sector: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		business_type_sector: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		business_sub_sector: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		business_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		business_wide_area: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		business_capacity: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
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
		kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		tdup_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		tdup_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tdup_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdup_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		tdup_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tdup_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdup_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		tdup_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tdup_status: {
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
		tableName: 'tblfcosstdup',
		timestamps: false
	});
};
