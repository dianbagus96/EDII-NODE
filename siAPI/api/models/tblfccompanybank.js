/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanybank', {
		company_bank_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		bank_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		account_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		account_bank_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		account_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		currency_id: {
			type: DataTypes.CHAR(3),
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
		tableName: 'tblfccompanybank'
	});
};
