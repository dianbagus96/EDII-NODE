/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcossrptkatraining', {
		training_id: {
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
		training_type: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		training_time: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		person_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		person_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		schedule_assign: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		notes: {
			type: DataTypes.TEXT,
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
		tableName: 'tblfcossrptkatraining',
		timestamps: false
	});
};
