/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossrptkarequirement', {
		req_id: {
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
		job_desc: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		education: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		work_experience: {
			type: DataTypes.STRING(100),
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
		tableName: 'tblfcossrptkarequirement',
		timestamps: false
	});
};
