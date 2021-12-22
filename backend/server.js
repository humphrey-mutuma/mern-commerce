require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World! im backend"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
