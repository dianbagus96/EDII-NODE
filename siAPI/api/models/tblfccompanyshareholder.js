/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanyshareholder', {
		shareholder_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		share_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		shareholder_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		shareholder_position: {
			type: DataTypes.STRING(100),
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
		identity_valid: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		country: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		npwp: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		telp: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		fax: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		share_value: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		f_control: {
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
		tableName: 'tblfccompanyshareholder'
	});
};
