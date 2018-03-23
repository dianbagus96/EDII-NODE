/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmauthority', {
		auth_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		group_id: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: ''
		},
		menu_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		f_create: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
		},
		f_update: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
		},
		f_delete: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
		},
		f_accept: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
		},
		f_reject: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
		},
		f_pending: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '0'
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
		tableName: 'tbldmauthority'
	});
};
