/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanydeed', {
		deed_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		deed_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		notaris_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		deed_no: {
			type: DataTypes.STRING(75),
			allowNull: true
		},
		deed_date: {
			type: DataTypes.DATEONLY,
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
		tableName: 'tblfccompanydeed'
	});
};
