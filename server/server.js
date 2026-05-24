const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API Running ✅");
});

/* DATABASE CONNECTION */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log(err);
  });

/* ROUTES */
const authRoutes = require("./routes/authRoutes");
const bikeRoutes = require("./routes/bikeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/bikes", bikeRoutes);

/* PORT */
const PORT = process.env.PORT || 10000;

/* SERVER */
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT} 🚀`);
});