/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfccompanyprod', {
		prod_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		business_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		prod_type: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		kbli_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		unit_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		capacity: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		local_percent: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		export_percent: {
			type: DataTypes.FLOAT,
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
		tableName: 'tblfccompanyprod'
	});
};
