const express = require('express');
const app = express();
const executeQuery = require('./connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Atur domain React Anda
    credentials: true // Izinkan kredensial seperti cookies
  }));  
// React Route Here
app.get('/', (req, res) => {
    console.log("sukses");
    res.send('Hello from Express backend!');
})
app.get('/home', (req, res) => {
    console.log("sukses");
    res.send('Hello from Express backend!');
})

// API Here
app.get('/api/major-data', async (req, res) => {
    try {
        const sql = "SELECT * FROM magang JOIN posisi ON magang.posisi_id = posisi.id_posisi JOIN perusahaan ON posisi.perusahaan_id = perusahaan.id_perusahaan JOIN siswa ON magang.siswa_id = siswa.id_siswa;"
        const hasilQuery = await executeQuery(sql);

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
        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.get('/api/perusahaan', async (req, res) => {
    try {
        const sql = "SELECT p.id_perusahaan, p.nama_perusahaan, posisi.nama_posisi FROM perusahaan as p JOIN posisi ON p.id_perusahaan = posisi.perusahaan_id;"
        const data = await executeQuery(sql);

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.get('/api/perusahaan/:id', async (req, res) => {
    try {
        const id_perusahaan = req.params.id;
        const sql = `SELECT perusahaan.nama_perusahaan, perusahaan.kota, perusahaan.provinsi, posisi.nama_posisi, COUNT(magang.siswa_id) AS jumlah_siswa FROM perusahaan JOIN posisi ON perusahaan.id_perusahaan = posisi.perusahaan_id LEFT JOIN magang ON posisi.id_posisi = magang.posisi_id WHERE perusahaan.id_perusahaan = ${id_perusahaan};`
        const data = await executeQuery(sql);

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.get('/api/perusahaan/:id/:id_posisi', async (req, res) => {
    try {
        const id_posisi = req.params.id_posisi;
        const sql = `SELECT siswa.id_siswa, siswa.nama_siswa, siswa.email FROM siswa JOIN magang ON siswa.id_siswa = magang.siswa_id JOIN posisi ON magang.posisi_id = posisi.id_posisi WHERE posisi.id_posisi = ${id_posisi};`
        const data = await executeQuery(sql);

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.get('/api/user/:id', async (req, res) => {
    try {
        const id_siswa = req.params.id;
        const sql = `SELECT * FROM magang JOIN posisi ON magang.posisi_id = posisi.id_posisi JOIN perusahaan ON posisi.perusahaan_id = perusahaan.id_perusahaan JOIN siswa ON magang.siswa_id = siswa.id_siswa WHERE siswa.id_siswa = ${id_siswa};`
        const data = await executeQuery(sql);

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  server.timeout = 60000;
