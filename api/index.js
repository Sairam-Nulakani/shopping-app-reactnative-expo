const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
mongoose
  .connect(
    "mongodb+srv://sairamnulakani4:sairam123@cluster0.lv8ao7b.mongodb.net/amazon?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server running.....");
});
