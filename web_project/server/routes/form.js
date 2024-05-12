const express = require('express');
const router = express.Router();
const executeQuery = require('../connection'); // Menggunakan file connection.js yang telah Anda definisikan sebelumnya

router.get('/', function (req, res) {
  res.send('API Form Magang');
});
router.post('/insertData', async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    // Mulai transaksi untuk memastikan konsistensi data
    await executeQuery('START TRANSACTION');
    // Perintah SQL untuk menambahkan data ke tabel posisi
    const posisiSql = `INSERT INTO posisi (perusahaan_id, nama_posisi) VALUES (?, ?)`;

    // Eksekusi perintah SQL untuk menyimpan data posisi
    const posisiResult = await executeQuery(posisiSql, [data.perusahaan_id, data.posisi]);

    // ID posisi yang baru saja dimasukkan
    const posisiId = posisiResult.insertId;

    // Perintah SQL untuk menambahkan data ke tabel magang
    const magangSql = `INSERT INTO magang (posisi_id, siswa_id, jenis_program, judul_laporan, deskripsi_magang, is_uang_saku, durasi_magang) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    // Eksekusi perintah SQL untuk menyimpan data magang
    await executeQuery(magangSql, [posisiId, data.siswa_id, data.jenis_program, data.judul_laporan, data.deskripsi_magang, data.uang_saku, data.durasi_magang]);

    // Commit transaksi jika semuanya berhasil
    await executeQuery('COMMIT');

    console.log('Transaction Complete.');
    res.status(200).json({ message: 'Transaction Complete.' });
  } catch (error) {
    // Rollback transaksi jika terjadi kesalahan
    await executeQuery('ROLLBACK');
    console.error('Error executing transaction: ', error);
    res.status(500).send('Error executing transaction');
  }
});

module.exports = router;