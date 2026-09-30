const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json()); // pass the body from the request to the route handler as req.body
app.use(express.urlencoded({ extended: true }));// parse incoming requests with urlencoded payloads

module.exports = app;