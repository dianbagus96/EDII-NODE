/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanyapplicant', {
		applicant_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		npwp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		identity_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		identity_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(100),
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
			type: DataTypes.STRING(255),
			allowNull: true
		},
		zip_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		telp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		hp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		notes: {
			type: DataTypes.STRING(255),
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
		tableName: 'tblfccompanyapplicant'
	});
};
