const express = require("express");
const app = express();
const executeQuery = require("../connection");
const bodyParser = require("body-parser");
const generateRandomString = require("../utils/generateRandomString");
const passwordHash = require('../utils/passwordHash');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
  loginRequest: async (req, res) => {
    const { nrp, password } = req.body;
    try {
      const sql = `SELECT * FROM siswa WHERE nrp = ${nrp};`;
      const data = await executeQuery(sql);
      if (data.length > 0) {
        if (nrp === data[0].nrp && password === data[0].password) {
          const token = jwt.sign({ id: data[0].nrp }, generateRandomString(32), {expiresIn: '30m'});
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
  logOutRequest: async (req, res) => {

  },
  updatePasswordForNewAuth: async(req, res)=>{
    
    const {nrp, password} = req.body;
    let hashedPassword;
    try{
      const dataMahasiswa = `SELECT * FROM siswa WHERE nrp=${nrp};`;
      let response = await executeQuery(dataMahasiswa);

      if(response.length > 0){
        hashedPassword = await passwordHash(password);
        const updatePassword = `UPDATE siswa SET password='${hashedPassword}', is_first_auth=${0} WHERE nrp='${nrp}' AND is_first_auth=${1};`
        let resetResponse = await executeQuery(updatePassword);
        if(resetResponse.affectedRows > 0){
          res.status(200).send(`Berhasil reset password user ${dataMahasiswa.RowDataPacket.nama_siswa}`);
        }else{
          throw new Error('Gagal update password');
        }
      }else{
        res.status(400).send(`User tidak terdaftar.`);
      }
    }catch(error){
      res.status(500).send(`${error}`);
    }
  }
};
