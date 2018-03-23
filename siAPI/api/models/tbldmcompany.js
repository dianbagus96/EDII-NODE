/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmcompany', {
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		company_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		establish_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		establish_period: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		valid_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		npwp: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		invest_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		legal_status: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		short_name: {
			type: DataTypes.STRING(50),
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
		address: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		rt: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		rw: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		zip_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		telp: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		fax: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		lat: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		lng: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		pic_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		pic_identity_no: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		pic_imta_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		pic_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		pic_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pic_email: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		pic_telp: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		pic_fax: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		logo_path: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		group_id: {
			type: DataTypes.CHAR(5),
			allowNull: true,
			defaultValue: 'INV'
		},
		f_delete: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
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
		tableName: 'tbldmcompany',
		timestamps: false
	});
};
