/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcuploadreq', {
		upload_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		company_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		req_id: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		ref_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		ref_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ref_sign_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		ref_ga: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		notes: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		file_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		file_path: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		file_size: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		file_type: {
			type: DataTypes.STRING(50),
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
		tableName: 'tblfcuploadreq'
	});
};
