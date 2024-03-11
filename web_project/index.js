const express = require('express');
const app = express();
const db = require('./connection');
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const sql = "SELECT * FROM magang JOIN posisi ON magang.posisi_id = posisi.id_posisi JOIN perusahaan ON posisi.perusahaan_id = perusahaan.id_perusahaan JOIN siswa ON magang.siswa_id = siswa.id_siswa;"
        const hasilQuery = await new Promise((resolve, reject) => {
            db.query(sql, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
        console.log(hasilQuery);

        // Memperoleh jumlah siswa tiap perusahaan
        const jumlahSiswaPerPerusahaan = {};
        for (let i = 0; i < hasilQuery.length; i++) {
            const row = hasilQuery[i];
            const perusahaanNama = row.nama_perusahaan;

            if (!jumlahSiswaPerPerusahaan[perusahaanNama]) {
                jumlahSiswaPerPerusahaan[perusahaanNama] = 1
            } else {
                jumlahSiswaPerPerusahaan[perusahaanNama]++;
            }
        }

        const posts = {};
        for (let j = 0; j < hasilQuery.length; j++) {
            const element = hasilQuery[j];
            if (element.deskripsi_magang) {
                posts[j] = {
                    nama: element.nama_siswa,
                    posisi: element.nama_posisi,
                    perusahaan: element.nama_perusahaan,
                    deskripsi_magang: element.deskripsi_magang,
                    created_at: element.created_at
                }
            }
        }

        console.log(posts);

        const data = {
            jumlahSiswaPerPerusahaan, posts
        }

        // Output jumlah siswa tiap perusahaan
        res.send(data);

    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/api/perusahaan', async (req, res) => {
    try {
        const sql = "SELECT p.id_perusahaan, p.nama_perusahaan, posisi.nama_posisi FROM perusahaan as p JOIN posisi ON p.id_perusahaan = posisi.perusahaan_id;"
        const data = await new Promise((resolve, reject) => {
            db.query(sql, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });

        res.send(data);

    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/api/users/:id', (req, res) => {

});

app.listen(port, () => {
    console.log(`Express app running on ${port}`);
});
