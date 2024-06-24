const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./Config/db");
const app = express();

connectDb().catch((err) => console.log(err));


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", require("./Routes/authRoutes"));

module.exports = app;
