/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmpermit', {
		permit_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		permit_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		flow_order: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		file_type: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		f_active: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		f_mandatory: {
			type: DataTypes.CHAR(11),
			allowNull: true
		},
		f_comm: {
			type: DataTypes.CHAR(11),
			allowNull: true
		},
		protocol: {
			type: DataTypes.CHAR(11),
			allowNull: true
		},
		permit_label: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		permit_title: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		permit_logo: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		permit_gedung: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
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
		tableName: 'tbldmpermit'
	});
};
