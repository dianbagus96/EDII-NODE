/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcpermitflow', {
		flow_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		permit_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		req_id: {
			type: DataTypes.CHAR(5),
			allowNull: true
		},
		flow_order: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		flow_type: {
			type: DataTypes.CHAR(1),
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
		tableName: 'tblfcpermitflow'
	});
};
