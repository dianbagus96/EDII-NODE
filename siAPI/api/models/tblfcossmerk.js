/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossmerk', {
		merk_id: {
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
		factory_loc: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		request_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		request_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		receive_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		receive_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		consultan_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		consultant_office: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		consultant_address: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		consultant_telp: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		consultant_fax: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		consultant_email: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		priority_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		priority_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		merk_class_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		merk_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		merk_translation: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_color: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_label: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_desc: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		merk_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		merk_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_sign_nip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		merk_sign_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		merk_sign_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_sign_ga: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		merk_note: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		merk_status: {
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
		tableName: 'tblfcossmerk',
		timestamps: false
	});
};
