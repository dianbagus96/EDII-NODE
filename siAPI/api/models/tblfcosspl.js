/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosspl', {
		pl_id: {
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
		pl_no: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		npwp: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		allocation: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		area: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		utilization: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		shoreline: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		owner: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		hpl_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		hpl_area: {
			type: DataTypes.DATE,
			allowNull: true
		},
		spj_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		spj_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		start_date_uwt: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		finish_date_uwt: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		skep_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		skep_date: {
			type: DataTypes.DATEONLY,
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
		tableName: 'tblfcosspl',
		timestamps: false
	});
};
