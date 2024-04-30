const express = require("express");
const app = express();
const executeQuery = require("../connection");
const bodyParser = require("body-parser");
const generateRandomString = require("../utils/generateRandomString");
const jwt = require('jsonwebtoken')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
  loginRequest: async (req, res) => {
    const { nrp, password } = req.body;
    try {
      const sql = `SELECT * FROM siswa WHERE nrp = ${nrp};`;
      const data = await executeQuery(sql);
      if (data.length === 1) {
        if (nrp === data[0].nrp && password === data[0].password) {
          const token = jwt.sign({ id: data[0].nrp }, generateRandomString(32));
          res.status(200).json({token: token, user: data[0]});
        } else {
          res.status(400).send("NRP atau password salah!");
        }
      } else {
        res.status(400).send(`User tidak terdaftar.`);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  logOutRequest: async (req, res) => {},
};
