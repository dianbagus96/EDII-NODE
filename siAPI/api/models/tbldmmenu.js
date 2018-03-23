/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbldmmenu', {
		menu_id: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			primaryKey: true
		},
		menu_parent: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		menu_caption_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		menu_caption_en: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		menu_header: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		menu_class: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		menu_url: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		menu_target: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		menu_atribut: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		menu_level: {
			type: DataTypes.CHAR(10),
			allowNull: true
		},
		menu_icon1: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		menu_icon2: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		menu_order: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		menu_type: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'F'
		},
		menu_download: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
		},
		created_by: {
			type: DataTypes.CHAR(32),
			allowNull: true,
			defaultValue: 'DBA'
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.CHAR(32),
			allowNull: true,
			defaultValue: 'DBA'
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'tbldmmenu'
	});
};
