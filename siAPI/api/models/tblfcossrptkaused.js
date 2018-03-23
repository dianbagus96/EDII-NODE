/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossrptkaused', {
		tkwnap_id: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		rptka_id: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tkwnap_total: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tkwnap_valid: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		work_start: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		notes: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
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
		tableName: 'tblfcossrptkaused',
		timestamps: false
	});
};
