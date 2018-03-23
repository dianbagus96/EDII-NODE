/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmkelurahan', {
		kel_id: {
			type: DataTypes.CHAR(10),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		kel_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		post_code: {
			type: DataTypes.CHAR(5),
			allowNull: true
		}
	}, {
		tableName: 'tbldmkelurahan'
	});
};
