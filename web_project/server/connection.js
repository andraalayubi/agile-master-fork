// connection.js
require('dotenv').config();
const mysql = require("mysql");

// Buat pool koneksi database
const pool = mysql.createPool({
  connectionLimit: 10, // Sesuaikan dengan kebutuhan Anda
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Buat fungsi untuk menjalankan query
const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = executeQuery;