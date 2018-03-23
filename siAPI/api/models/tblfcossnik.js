/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossnik', {
		nik_id: {
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
		revenue: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		gross_revenue: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		current_assets: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		fixed_assets: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		other_assets: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_assets: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		long_term_debt: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		short_term_debt: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_debt: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		retained_earnings: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_capital: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		public_accountant: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		public_report: {
			type: "YEAR(4)",
			allowNull: true
		},
		public_opinion: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		bc_lha_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		bc_report: {
			type: "YEAR(4)",
			allowNull: true
		},
		bc_opinion: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		sys_accountant: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		f_it_inventory: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
		},
		customs_expert: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		certificate_seri_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		certficate_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		ship_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		ship_noreg: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		ship_capacity: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ship_route_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		ship_route_from: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		ship_from_to: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		plane_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		plane_noreg: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		plane_capacity: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		plane_route_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		plane_route_from: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		plane_route_to: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		skep_no_tps: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		type_tps: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		pjt_permit_post: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		pjt_expert_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		pjt_expert_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		pjt_certificate_seri: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		pjt_certificate_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		iso_certificate_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		iso_certificate_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		iso_certificate_valid: {
			type: DataTypes.DATE,
			allowNull: true
		},
		iso_publisher: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		other_expert_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		other_expert_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		other_certificate_seri: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		other_certificate_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		member_association: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		survey_result: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		survey_note: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nik_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		nik_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		nik_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nik_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		nik_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		nik_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nik_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		nik_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nik_status: {
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
		tableName: 'tblfcossnik',
		timestamps: false
	});
};
