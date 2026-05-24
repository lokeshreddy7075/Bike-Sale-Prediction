const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

/* FINAL CORS FIX */
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());