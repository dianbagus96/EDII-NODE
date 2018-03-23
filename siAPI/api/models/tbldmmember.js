/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmmember', {
		member_id: {
			type: DataTypes.CHAR(15),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		npwp: {
			type: DataTypes.CHAR(20),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		short_name: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		address: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		web: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		telp: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		fax: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		prop: {
			type: DataTypes.CHAR(2),
			allowNull: true
		},
		kab: {
			type: DataTypes.CHAR(4),
			allowNull: true
		},
		kec: {
			type: DataTypes.CHAR(7),
			allowNull: true
		},
		kel: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		lat: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		lng: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		pos_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pic_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		pic_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pic_email: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		pic_telp: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		img_path: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		created_by: {
			type: DataTypes.CHAR(20),
			allowNull: true,
			defaultValue: 'Administrator'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.CHAR(20),
			allowNull: true
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tbldmmember'
	});
};
