const express = require("express");
const executeQuery = require("../connection");
const bodyParser = require("body-parser");
const authRouter = express.Router();
const {loginRequest, logOutRequest} = require('./method');

authRouter.post("/login", loginRequest);
authRouter.post("/logout", logOutRequest);

module.exports = authRouter;
