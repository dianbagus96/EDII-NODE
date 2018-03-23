/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfckomcomplaint', {
		complaint_id: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		osskom_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		oss_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		business_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		city_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		resources_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		resource_link: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		code: {
			type: DataTypes.STRING(75),
			allowNull: true
		},
		company_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		complainant_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		complainant_addr: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		complainant_phone: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		complainant_email: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		investment_currency: {
			type: DataTypes.CHAR(3),
			allowNull: true
		},
		investment_value: {
			type: "DOUBLE(18,2)",
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '0'
		},
		chronology: {
			type: DataTypes.STRING(500),
			allowNull: true,
			defaultValue: ''
		},
		source_of_fund: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		photo: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
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
		tableName: 'tblfckomcomplaint'
	});
};
