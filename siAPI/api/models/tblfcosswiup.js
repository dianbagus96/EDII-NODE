/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblfcosswiup', {
		wiup_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		oss_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		a_pemohon: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		alamat_perusahaan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		catatan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		i_telp_perusahaan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		id_permohonan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		n_pemohon: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		n_perusahaan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nama_pimpinan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nip_ttd: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		no_pendaftaran: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		no_reg_perusahaan: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		no_surat: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		no_surat_edit: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		npwp: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		ref_pendataran: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		telp_pemohon: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		tgl: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		tgl_surat: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		tgl_surat_edit: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'tblfcosswiup',
		timestamps: false
	});
};
