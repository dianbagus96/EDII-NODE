"use strict";

var soap = require('strong-soap').soap;
var url = 'http://sipo.kemendag.go.id/ws/server.php?wsdl';

var xml = `<binus_tdp>
                <permohonan>
                    <jenis_permohonan>[Jenis Permohonan, n, Lampiran 1, M]</jenis_permohonan>
                    <pembaharuan>[Urutan Pembaharuan, n, M]</pembaharuan>
                    <no_ijin>[No. TDP, an 50, M]</no_ijin>
                    <tgl_ijin>[Tgl. TDP, an 8, Format YYYYMMDD, M]</tgl_ijin>
                    <tgl_akhir>[Tgl. Akhir TDP, an 8, Format YYYYMMDD, M]</tgl_akhir>
                    <kbli>[Kode KBLI, an 5, M]</kbli>
                    <pokok>[Kegiatan Pokok Perusahaan, an 255, M]</pokok>
                    <nama_ttd>[Nama Pejabat Penandatangan, an 50, M]</nama_ttd>
                    <jabat_ttd>[Jabatan Pejabat Penandatangan, an 50, M]</jabat_ttd>
                    <nip_ttd>[NIP Pejabat Penandatangan, an 20, M]</nip_ttd>
                </permohonan>
                <perusahaan>
                    <bentuk_usaha>[Bentuk Usaha Perusahaan, n, Lampiran 2, M]</bentuk_usaha>
                    <status_perusahaan>[Status Perusahaan, n, Lampiran 3, M]</status_perusahaan>
                    <npwp>[NPWP Perusahaan, tanpa format, an 15, M]</npwp>
                    <nama>[Nama Perusahaan, an 100, M]</nama>
                    <alamat>[Alamat Perusahaan, an 255, M]</alamat>
                    <idprop>[Kode Propinsi, an 2, Tabel Referensi Propinsi, M]</idprop>
                    <idkab>[Kode Kabupaten, an 4, Tabel Referensi Kabupaten, M]</idkab>
                    <idkec>[Kode Kecamatan, an 7, Tabel Referensi Kecamatan, M]</idkec>
                    <idkel>[Kode Kelurahan, an 10, Tabel Referensi Kelurahan, M]</idkel>
                    <kode_pos>[Kode Pos, an 6]</kode_pos>
                    <telepon>[Telepon Perusahaan, an 50, M]</telepon>
                    <fax>[Fax Perusahaan, an 50, M]</fax>
                    <idgroup>[Group Perusahaan, n, ???]</idgroup>
                </perusahaan>
                <kegiatan_perusahaan>
                    <lokasi_produksi>[Lokasi Unit Produksi, an 100]</lokasi_produksi>
                    <prop_produksi>[Propinsi Lokasi Unit Produksi, an 2, Tabel Referensi Propinsi]</prop_produksi>
                    <kab_produksi>[Kabupaten Lokasi Unit Produksi, an 4, Tabel Referensi Kabupaten]</kab_produksi>
                    <id_tanam_modal>[Bentuk Penanaman Modal, n, Lampiran 4, M]</id_tanam_modal>
                    <tgl_pendirian>[Tanggal Pendirian Perusahaan, an 8, Format YYYYMMDD, M]</tgl_pendirian>
                    <tgl_kegiatan>[Tanggal Mulai Kegiatan Perusahaan, an 8, Format YYYYMMDD, M]</tgl_kegiatan>
                    <lama_berdiri>[Jawngka Waktu Berdirinya Perusahaan, n, M]</lama_berdiri>
                    <id_kerjasama>[Bentuk Kerjasama dengan Pihak Ketiga, n, Lampiran 5]</id_kerjasama>
                    <nama_merek_dagang>[Merek Dagang, an 50]</nama_merek_dagang>
                    <no_merek_dagang>[No. Merek Dagang, an 50]</no_merek_dagang>
                    <pemegang_paten>[Pemegang Hak Paten, an 50]</pemegang_paten>
                    <no_paten>[No. Hak Paten, an 50]</no_paten>
                    <pemegang_cipta>[Pemegang Hak Cipta, an 50]</pemegang_cipta>
                    <no_cipta>[No. Hak Cipta, an 50]</no_cipta>
                    <jumlah_wni>[Jumlah Karyawan WNI, n, M]</jumlah_wni>
                    <jumlah_wna>[Jumlah Karyawan WNA, n, M]</jumlah_wna>
                    <jenis_perusahaan>[Jenis Perusahaan, n, Lampiran 6, M]</jenis_perusahaan>
                    <lain_1>[Kegiatan Usaha Lain 1, an 255]</lain_1>
                    <lain_2>[Kegiatan Usaha Lain 2, an 255]</lain_2>
                    <komoditi_pokok>[Komoditi/Produk Utama, an 255, M]</komoditi_pokok>
                    <komoditi_lain_1>[Komoditi/Produk Lain 1, an 255]</komoditi_lain_1>
                    <komoditi_lain_2>[Komoditi/Produk Lain 2, an 255]</komoditi_lain_2>
                    <omset>[Omset perusahaan, n, M]</omset>
                    <total_aset>[Total Aset, n, M]</total_aset>
                    <id_mata_rantai>[Kedudukan dalam mata rantai kegiatan usaha, n, Lampiran 7, M]</id_mata_rantai>
                    <flag_mesin>[Menggunakan mesin atau tidak, n (0 atau 1), M]</flag_mesin>
                    <kapasitas_terpasang>[Kapasitas Terpasang, n, M (bila flag_mesin 1)]</kapasitas_terpasang>
                    <kapasitas_satuan>[Satuan Kapasitas Terpasang, an 3, M (bila flag_mesin 1)]</kapasitas_satuan>
                    <kapasitas_produksi>[Kapasitas Produksi Per Tahun, n, M (bila flag_mesin 1)]</kapasitas_produksi>
                    <kapasitas_produksi_satuan>[Satuan Kapasitas Produksi Per Tahun, n, M (bila flag_mesin 1)]</kapasitas_produksi_satuan>
                    <kandungan_lokal>[Kandungan Komponen Produk Lokal, n, M (bila flag mesin 1)]</kandungan_lokal>
                    <kandungan_impor>[Kandungan Komponen Produk Impor, n, M (bila flag mesin 1)]</kandungan_impor>
                    <id_pengecer>[Jenis Usaha, n, Lampiran 8, M (jika id_mata_rantai Pengecer)]</id_pengecer>
                </kegiatan_perusahaan>
                <koperasi>
                    <jenis_koperasi>[Jenis Koperasi, n, Lampiran 7, M]</jenis_koperasi>
                    <jumlah_anggota_koperasi>[Jumlah Anggota Koperasi, n, M]</jumlah_anggota_koperasi>
                    <simpanan_pokok>[Jumlah simpanan pokok, n, M]</simpanan_pokok>
                    <simpanan_wajib>[Jumlah simpanan wajib, n, M]</simpanan_wajib>
                    <dana_cadangan>[Jumlah Dana Cadangan, n, M]</dana_cadangan>
                    <hibah>[Jumlah Hibah, n, M]</hibah>
                    <pinjaman_anggota>[Jumlah Modal Pinjaman Anggota, n, M]</pinjaman_anggota>
                    <pinjaman_koperasi>[Jumlah Modal Pinjaman Koperasi Lain, n, M]</pinjaman_koperasi>
                    <pinjaman_bank>[Jumlah Modal Pinjaman Bank, n, M]</pinjaman_bank>
                    <pinjaman_lain>[Jumlah Modal Pinjaman Lainnya, n, M]</pinjaman_lain>
                </koperasi>
                <perusahaan_induk>
                    <nama>[Nama Perusahaan Induk, an 100, M (bila Status Perusahaan Kantor Cabang/Pembantu/Perwakilan)]</nama>
                    <no_tdp>[No. TDP Perusahaan Induk, an 50, M]</no_tdp>
                    <alamat>[Alamat Perusahaan Induk, an 255, M]</alamat>
                    <idprop>[Kode Propinsi Perusahaan Induk, an 2, Tabel Referensi Propinsi, M]</idprop>
                    <idkab>[Kode Kabupaten Perusahaan Induk, an 4, Tabel Referensi Kabupaten, M]</idkab>
                    <idkec>[Kode Kecamatan Perusahaan Induk, an 7, Tabel Referensi Kecamatan, M]</idkec>
                    <idkel>[Kode Kelurahan Perusahaan Induk, an 10, Tabel Referensi Kelurahan, M]</idkel>
                </perusahaan_induk>
                <penanggung_jawab>
                    <nama>[Nama Penanggung Jawab, an 100, M]</nama>
                    <alamat>[Alamat Penanggung Jawab, an 255, M]</alamat>
                    <tempat_lahir>[Tempat Lahir Penanggung Jawab, an 50, M]</tempat_lahir>
                    <tanggal_lahir>[Tanggal Lahir Penanggung Jawab, an 8, Format YYYYMMDD, M]</tanggal_lahir>
                    <idprop>[Kode Propinsi Penanggung Jawab, an 2, Tabel Referensi Propinsi, M]</idprop>
                    <idkab>[Kode Kabupaten Penanggung Jawab, an 4, Tabel Referensi Kabupaten, M]</idkab>
                    <idkec>[Kode Kecamatan Penanggung Jawab, an 7, Tabel Referensi Kecamatan, M]</idkec>
                    <idkel>[Kode Kelurahan Penanggung Jawab, an 10, Tabel Referensi Kelurahan, M]</idkel>
                    <telepon>[Telepon/HP Penanggung Jawab, an 50, M]</telepon>
                    <jenis_identitas>[Jenis Identitas Penanggung Jawab, n, Lampiran 9, M]</jenis_identitas>
                    <no_identitas>[No. Identitas Penanggung Jawab, an 50, M]</no_identitas>
                    <negara>[Kewarganegaraan Penanggung Jawab, an 2, Tabel Referensi Negara, M]</negara>
                    <email>[Alamat Email Perusahaan, an 50, M]</email>
                </penanggung_jawab>	
                <bank>
                    <bank_1>[Kode Bank 1, n, Tabel Referensi Bank, M]</bank_1>
                    <bank_2>[Kode Bank 2, n, Tabel Referensi Bank]</bank_2>
                    <jumlah>[Jumlah Bank, n, M]</jumlah>
                </bank>
                <modal>
                    <modal_dasar>[Modal Dasar, n, M]</modal_dasar>
                    <modal_ditempatkan>[Modal Ditempatkan, n, M]</modal_ditempatkan>
                    <modal_disetor>[Modal Disetor, n, M]</modal_disetor>
                    <jumlah_saham>[Jumlah Saham (lembar), n, M]</jumlah_saham>
                    <nilai_per_saham>[Nilai Per Saham, n, M]</nilai_per_saham>
                    <modal_sekutu_aktif>[Modal disetor sekutu aktif, n, M (Bila Bentuk Usaha CV)]</modal_sekutu_aktif>
                    <modal_sekutu_pasif>[Modal disetor sekutu pasif, n, M (Bila Bentuk Usaha CV)]</modal_sekutu_pasif>
                </modal>
                <legalitas>
                    <no_pendirian>[No. Akta Pendirian, an 100, M]</no_pendirian>
                    <tgl_pendirian>[Tanggal Akta Pendirian, an 8, Format YYYYMMDD, M]</tgl_pendirian>
                    <notaris_pendirian>[Nama Notaris, an 100, M]</notaris_pendirian>
                    <alamat_pendirian>[Alamat Perusahaan, an 255, M]</alamat_pendirian>
                    <telepon_pendirian>[No. Telepon, an 50, M]</telepon_pendirian>
                    <no_perubahan>[No. Akta Perubahan Terakhir, an 100]</no_perubahan>
                    <tgl_perubahan>[Tanggal Akta Perubahan Terakhir, an 8, Format YYYYMMDD]</tgl_perubahan>
                    <notaris_perubahan>[Nama Notaris Perubahan, an 100]</notaris_perubahan>
                    <tipe_pengesahan>[Tipe Pengesahan, n, Lampiran 10, M]</tipe_pengesahan>
                    <no_pengesahan>[No. Pengesahan, an 100, M]</no_pengesahan>
                    <tgl_pengesahan>[Tanggal Pengesahan, an 8, Format YYYYMMDD, M]</tgl_pengesahan>
                    <no_perubahan_pengesahan>[No. Perubahan Pengesahan, an 100]</no_perubahan_pengesahan>
                    <tgl_perubahan_pengesahan>[Tanggal Perubahan Pengesahan, an 8, Format YYYYMMDD]</tgl_perubahan_pengesahan>
                    <no_perubahan_anggaran>[No. Perubahan Anggaran Dasar, an 100]</no_perubahan_anggaran>
                    <tgl_perubahan_anggaran>[Tanggal Perubahan Anggaran Dasar, an 8, Format YYYYMMDD]</tgl_perubahan_anggaran>
                    <no_perubahan_direksi>[No. Perubahan Direksi/Komisaris, an 100]</no_perubahan_direksi>
                    <tgl_perubahan_direksi>[Tanggal Perubahan Direksi/Komisaris, an 8, Format YYYYMMDD]</tgl_perubahan_direksi>
                </legalitas>
                <ijin_lain>
                    <loop>
                        <id_ijin>[Kode Ijin, n, Tabel Referensi Perijinan, M]</id_ijin>
                        <nomor>[No. Ijin, an 100, M]</nomor>
                        <penerbit>[Nama Penerbit, an 255, M]</penerbit>
                        <tanggal>[Tanggal Ijin, an 8, Format YYYYMMDD, M]</tanggal>
                        <berlaku>[Masa Berlaku, n, M]</berlaku>
                    </loop>
                </ijin_lain>
                <pimpinan>
                    <jumlah_penanggung_jawab>[Jumlah Penanggung Jawab, n, M]</jumlah_penanggung_jawab>
                    <jumlah_direktur>[Jumlah Direktur, n, M]</jumlah_direktur>
                    <jumlah_komisaris>[Jumlah Komisaris, n, M]</jumlah_komisaris>
                    <jumlah_pengawas>[Jumlah Pengawas, n, M (Bila Koperasi)]</jumlah_pengawas>
                    <jumlah_sekutu_aktif>[Jumlah Sekutu Aktif, n, M (Bila CV)]</jumlah_sekutu_aktif>
                    <jumlah_sekutu_pasif>[Jumlah Sekutu Pasif, n, M (Bila CV)]</jumlah_sekutu_pasif>
                    <jumlah_sekutu_aktif_baru>[Jumlah Sekutu Aktif Baru, n, M (Bila CV)]</jumlah_sekutu_aktif_baru>
                    <jumlah_sekutu_pasif_baru>[Jumlah Sekutu Pasif Baru, n, M (Bila CV)]</jumlah_sekutu_pasif_baru>
                    <jumlah_pemegang_saham>[Jumlah Pemegang Saham, n, M]</jumlah_pemegang_saham>
                    <loop>
                        <nama>[Nama Pimpinan, an 100, M]</nama>
                        <jabatan>[Jabatan Pimpinan, n, Tabel Referensi Jabatan, M]</jabatan>
                        <tempat_lahir>[Tempat Lahir, an 50, M]</tempat_lahir>
                        <tanggal_lahir>[Tanggal Lahir, an 8, Format YYYYMMDD, M]</tanggal_lahir>
                        <alamat>[Alamat, an 255, M]</alamat>
                        <kode_pos>[Kode Pos, an 10]</kode_pos>
                        <telepon>[Telepon, an 50, M]</telepon>
                        <negara>[Kewarganegaraan, an 2, Tabel Referensi Negara, M]</negara>
                        <tanggal_jabatan>[Tanggal Mulai Menjabat, an 8, Format YYYYMMDD, M]</tanggal_jabatan>
                        <jumlah_saham>[Jumlah Saham, n, M]</jumlah_saham>
                        <jumlah_modal>[Jumlah Moda, n, M]</jumlah_modal>
                        <jabatan_lain>
                            <loop>
                                <nama>[Nama Perusahaan, an 100, M (Bila ada jabatan lain)]</nama>
                                <jabatan>[Jabatan, n, Tabel Referensi Jabatan, M]</jabatan>
                                <alamat>[Alamat Perusahaan, an 255, M]</alamat>
                                <kode_pos>[Kode Pos, an 10]</kode_pos>
                                <telepon>[Telepon, an 50, M]</telepon>
                                <tanggal_jabatan>[Tanggal Mulai Menjabat, an 8, Format YYYYMMDD, M]</tanggal_jabatan>
                            </loop>
                        </jabatan_lain>
                    </loop>
                </pimpinan>
                <saham>
                    <loop>
                        <nama>[Nama Pemilik Saham, an 100, M]</nama>
                        <alamat>[Alamat, an 255, M]</alamat>
                        <kode_pos>[Kode Pos, an 10]</kode_pos>
                        <telepon>[Telepon, an 50, M]</telepon>
                        <negara>[Kewarganegaraan, an 2, Tabel Referensi Negara, M]</negara>
                        <npwp>[NPWP, an 15, M]</npwp>
                        <jumlah_saham>[Jumlah Saham, n, M]</jumlah_saham>
                        <jumlah_modal>[Jumlah Modal, n, M]</jumlah_modal>
                    </loop>
                </saham>
                <cabang>
                    <loop>
                        <nama>[Nama Kantor Cabang, an 100, M]</nama>
                        <no_tdp>[No. TDP, an 50, M]</no_tdp>
                        <alamat>[Alamat, an 255, M]</alamat>
                        <idprop>[Kode Propinsi Perusahaan Cabang, an 2, Tabel Referensi Propinsi, M]</idprop>
                        <idkab>[Kode Kabupaten Perusahaan Cabang, an 4, Tabel Referensi Kabupaten, M]</idkab>
                        <kode_pos>[Kode Pos, an 10]</kode_pos>
                        <telepon>[Telepon, an 50, M]</telepon>
                        <status_perusahaan>[Status Perusahaan, n, Lampiran 3, M]</status_perusahaan>
                        <jenis_perusahaan>[Jenis Perusahaan, n, Lampiran 6, M]</jenis_perusahaan>
                    </loop>
                </cabang>
            </binus_tdp>`;


/* ----- S: TAG PERMOHONAN ------ */
xml = xml.replace('[Jenis Permohonan, n, Lampiran 1, M]', '1');
xml = xml.replace('[Urutan Pembaharuan, n, M]', '');
xml = xml.replace('[No. TDP, an 50, M]', '');
xml = xml.replace('[Tgl. TDP, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[Tgl. Akhir TDP, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[Kode KBLI, an 5, M]', '');
xml = xml.replace('[Kegiatan Pokok Perusahaan, an 255, M]', '');
xml = xml.replace('[Nama Pejabat Penandatangan, an 50, M]', '');
xml = xml.replace('[Jabatan Pejabat Penandatangan, an 50, M]', '');
xml = xml.replace('[NIP Pejabat Penandatangan, an 20, M]', '');
/* ----- E: TAG PERMOHONAN ------ */

/* ----- S: TAG PERUSAHAAN ------ */
xml = xml.replace('[Bentuk Usaha Perusahaan, n, Lampiran 2, M]', '');
xml = xml.replace('[Status Perusahaan, n, Lampiran 3, M]', '');
xml = xml.replace('[NPWP Perusahaan, tanpa format, an 15, M]', '');
xml = xml.replace('[Nama Perusahaan, an 100, M]', '');
xml = xml.replace('[Alamat Perusahaan, an 255, M]', '');
xml = xml.replace('[Kode Propinsi, an 2, Tabel Referensi Propinsi, M]', '');
xml = xml.replace('[Kode Kabupaten, an 4, Tabel Referensi Kabupaten, M]', '');
xml = xml.replace('[Kode Kecamatan, an 7, Tabel Referensi Kecamatan, M]', '');
xml = xml.replace('[Kode Kelurahan, an 10, Tabel Referensi Kelurahan, M]', '');
xml = xml.replace('[Kode Pos, an 6]', '');
xml = xml.replace('[Telepon Perusahaan, an 50, M]', '');
xml = xml.replace('[Fax Perusahaan, an 50, M]', '');
xml = xml.replace('[Group Perusahaan, n, ???]', '');
/* ----- E: TAG PERUSAHAAN ------ */

/* ----- S: TAG KEGIATAN_PERUSAHAAN ------ */
xml = xml.replace('[Lokasi Unit Produksi, an 100]', '');
xml = xml.replace('[Propinsi Lokasi Unit Produksi, an 2, Tabel Referensi Propinsi]', '');
xml = xml.replace('[Kabupaten Lokasi Unit Produksi, an 4, Tabel Referensi Kabupaten]', '');
xml = xml.replace('[Bentuk Penanaman Modal, n, Lampiran 4, M]', '');
xml = xml.replace('[Tanggal Pendirian Perusahaan, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[Tanggal Mulai Kegiatan Perusahaan, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[Jawngka Waktu Berdirinya Perusahaan, n, M]', '');
xml = xml.replace('[Bentuk Kerjasama dengan Pihak Ketiga, n, Lampiran 5]', '');
xml = xml.replace('[Merek Dagang, an 50]', '');
xml = xml.replace('[No. Merek Dagang, an 50]', '');
xml = xml.replace('[Pemegang Hak Paten, an 50]', '');
xml = xml.replace('[No. Hak Paten, an 50]', '');
xml = xml.replace('[Pemegang Hak Cipta, an 50]', '');
xml = xml.replace('[No. Hak Cipta, an 50]', '');
xml = xml.replace('[Jumlah Karyawan WNI, n, M]', '');
xml = xml.replace('[Jumlah Karyawan WNA, n, M]', '');
xml = xml.replace('[Jenis Perusahaan, n, Lampiran 6, M]', '');
xml = xml.replace('[Kegiatan Usaha Lain 1, an 255]', '');
xml = xml.replace('[Kegiatan Usaha Lain 2, an 255]', '');
xml = xml.replace('[Komoditi/Produk Utama, an 255, M]', '');
xml = xml.replace('[Komoditi/Produk Lain 1, an 255]', '');
xml = xml.replace('[Komoditi/Produk Lain 2, an 255]', '');
xml = xml.replace('[Omset perusahaan, n, M]', '');
xml = xml.replace('[Total Aset, n, M]', '');
xml = xml.replace('[Kedudukan dalam mata rantai kegiatan usaha, n, Lampiran 7, M]', '');
xml = xml.replace('[Menggunakan mesin atau tidak, n (0 atau 1), M]', '');
xml = xml.replace('[Kapasitas Terpasang, n, M (bila flag_mesin 1)]', '');
xml = xml.replace('[Satuan Kapasitas Terpasang, an 3, M (bila flag_mesin 1)]', '');
xml = xml.replace('[Kapasitas Produksi Per Tahun, n, M (bila flag_mesin 1)]', '');
xml = xml.replace('[Satuan Kapasitas Produksi Per Tahun, n, M (bila flag_mesin 1)]', '');
xml = xml.replace('[Kandungan Komponen Produk Lokal, n, M (bila flag mesin 1)]', '');
xml = xml.replace('[Kandungan Komponen Produk Impor, n, M (bila flag mesin 1)]', '');
xml = xml.replace('[Jenis Usaha, n, Lampiran 8, M (jika id_mata_rantai Pengecer)]', '');
/* ----- E: TAG KEGIATAN_PERUSAHAAN ------ */

/* ----- S: TAG KOPERASI ------ */
xml = xml.replace('[Jenis Koperasi, n, Lampiran 7, M]', '');
xml = xml.replace('[Jumlah Anggota Koperasi, n, M]', '');
xml = xml.replace('[Jumlah simpanan pokok, n, M]', '');
xml = xml.replace('[Jumlah simpanan wajib, n, M]', '');
xml = xml.replace('[Jumlah Dana Cadangan, n, M]', '');
xml = xml.replace('[Jumlah Hibah, n, M]', '');
xml = xml.replace('[Jumlah Modal Pinjaman Anggota, n, M]', '');
xml = xml.replace('[Jumlah Modal Pinjaman Koperasi Lain, n, M]', '');
xml = xml.replace('[Jumlah Modal Pinjaman Bank, n, M]', '');
xml = xml.replace('[Jumlah Modal Pinjaman Lainnya, n, M]', '');
/* ----- E: TAG KOPERASI ------ */

/* ----- S: TAG PERUSAHAAN_INDUK ------ */
xml = xml.replace('[Nama Perusahaan Induk, an 100, M (bila Status Perusahaan Kantor Cabang/Pembantu/Perwakilan)]', '');
xml = xml.replace('[No. TDP Perusahaan Induk, an 50, M]', '');
xml = xml.replace('[Alamat Perusahaan Induk, an 255, M]', '');
xml = xml.replace('[Kode Propinsi Perusahaan Induk, an 2, Tabel Referensi Propinsi, M]', '');
xml = xml.replace('[Kode Kabupaten Perusahaan Induk, an 4, Tabel Referensi Kabupaten, M]', '');
xml = xml.replace('[Kode Kecamatan Perusahaan Induk, an 7, Tabel Referensi Kecamatan, M]', '');
xml = xml.replace('[Kode Kelurahan Perusahaan Induk, an 10, Tabel Referensi Kelurahan, M]', '');
/* ----- E: TAG PERUSAHAAN_INDUK ------ */

/* ----- S: TAG PENANGGUNG_JAWAB ------ */
xml = xml.replace('[Nama Penanggung Jawab, an 100, M]', '');
xml = xml.replace('[Alamat Penanggung Jawab, an 255, M]', '');
xml = xml.replace('[Tempat Lahir Penanggung Jawab, an 50, M]', '');
xml = xml.replace('[Tanggal Lahir Penanggung Jawab, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[Kode Propinsi Penanggung Jawab, an 2, Tabel Referensi Propinsi, M]', '');
xml = xml.replace('[Kode Kabupaten Penanggung Jawab, an 4, Tabel Referensi Kabupaten, M]', '');
xml = xml.replace('[Kode Kecamatan Penanggung Jawab, an 7, Tabel Referensi Kecamatan, M]', '');
xml = xml.replace('[Kode Kelurahan Penanggung Jawab, an 10, Tabel Referensi Kelurahan, M]', '');
xml = xml.replace('[Telepon/HP Penanggung Jawab, an 50, M]', '');
xml = xml.replace('[Jenis Identitas Penanggung Jawab, n, Lampiran 9, M]', '');
xml = xml.replace('[No. Identitas Penanggung Jawab, an 50, M]', '');
xml = xml.replace('[Kewarganegaraan Penanggung Jawab, an 2, Tabel Referensi Negara, M]', '');
xml = xml.replace('[Alamat Email Perusahaan, an 50, M]', '');
/* ----- E: TAG PENANGGUNG_JAWAB ------ */

/* ----- S: TAG BANK ------ */
xml = xml.replace('[Kode Bank 1, n, Tabel Referensi Bank, M]', '');
xml = xml.replace('[Kode Bank 2, n, Tabel Referensi Bank]', '');
xml = xml.replace('[Jumlah Bank, n, M]', '');
/* ----- E: TAG BANK ------ */


/* ----- S: TAG MODAL ------ */
xml = xml.replace('[Modal Dasar, n, M]', '');
xml = xml.replace('[Modal Ditempatkan, n, M]', '');
xml = xml.replace('[Modal Disetor, n, M]', '');
xml = xml.replace('[Jumlah Saham (lembar), n, M]', '');
xml = xml.replace('[Nilai Per Saham, n, M]', '');
xml = xml.replace('[Modal disetor sekutu aktif, n, M (Bila Bentuk Usaha CV)]', '');
xml = xml.replace('[Modal disetor sekutu pasif, n, M (Bila Bentuk Usaha CV)]', '');
/* ----- E: TAG MODAL ------ */

/* ----- S: TAG LEGALITAS ------ */
xml = xml.replace('[No. Akta Pendirian, an 100, M]', '');
xml = xml.replace('[Tanggal Akta Pendirian, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[Nama Notaris, an 100, M]', '');
xml = xml.replace('[Alamat Perusahaan, an 255, M]', '');
xml = xml.replace('[No. Telepon, an 50, M]', '');
xml = xml.replace('[No. Akta Perubahan Terakhir, an 100]', '');
xml = xml.replace('[Tanggal Akta Perubahan Terakhir, an 8, Format YYYYMMDD]', '');
xml = xml.replace('[Nama Notaris Perubahan, an 100]', '');
xml = xml.replace('[Tipe Pengesahan, n, Lampiran 10, M]', '');
xml = xml.replace('[No. Pengesahan, an 100, M]', '');
xml = xml.replace('[Tanggal Pengesahan, an 8, Format YYYYMMDD, M]', '');
xml = xml.replace('[No. Perubahan Pengesahan, an 100]', '');
xml = xml.replace('[Tanggal Perubahan Pengesahan, an 8, Format YYYYMMDD]', '');
xml = xml.replace('[No. Perubahan Anggaran Dasar, an 100]', '');
xml = xml.replace('[Tanggal Perubahan Anggaran Dasar, an 8, Format YYYYMMDD]', '');
xml = xml.replace('[No. Perubahan Direksi/Komisaris, an 100]', '');
xml = xml.replace('[Tanggal Perubahan Direksi/Komisaris, an 8, Format YYYYMMDD]', '');
/* ----- E: TAG LEGALITAS ------ */

/* ----- S: TAG LEGALITAS ------ */
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
xml = xml.replace('isi', '');
/* ----- E: TAG LEGALITAS ------ */

//console.log(xml);
//return false;

var requestArgs = {
  username: 'IBM',
  password: 'IBM',
  xmlTDP: xml.toString,

};

var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client['sendTDP'];
  method(requestArgs, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
  });
});