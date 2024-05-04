const express = require("express");
const executeQuery = require("../connection");
const bodyParser = require("body-parser");
const authRouter = express.Router();
const {loginRequest, logoutRequest, updatePasswordForNewAuth, verifyAuthorizedUser} = require('./method');

authRouter.post("/login", loginRequest);
authRouter.post("/logout", logoutRequest);
authRouter.post("/reset-password", updatePasswordForNewAuth);
authRouter.post("/verify/", verifyAuthorizedUser);

module.exports = authRouter;
