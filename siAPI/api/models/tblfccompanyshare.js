/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanyshare', {
		share_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		share_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		number_of_share: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		value_of_share: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_foreign_share: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_percent_foreign: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		total_domestic_share: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_percent_domestic: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		total_value_share: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		authorized_capital: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		issued_capital: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		paid_up_capital: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		equity: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		return_earning: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		foreign_loan: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		domestic_loan: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_capital: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		total_funds: {
			type: DataTypes.FLOAT,
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
		tableName: 'tblfccompanyshare'
	});
};
