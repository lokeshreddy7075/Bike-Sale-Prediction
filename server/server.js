const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running ✅");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log(err);
  });

const authRoutes = require("./routes/authRoutes");
const bikeRoutes = require("./routes/bikeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/bikes", bikeRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});