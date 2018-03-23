/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmfacilities', {
		facilities_id: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		facilities_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		facilities_order: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		facilities_group: {
			type: DataTypes.CHAR(5),
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
		tableName: 'tbldmfacilities'
	});
};
