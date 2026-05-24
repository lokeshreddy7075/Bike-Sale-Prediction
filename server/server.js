const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

/* CONFIG */
dotenv.config();

/* APP */
const app = express();

/* CORS FIX */
app.use(
  cors({
    origin: "https://bike-sale-prediction.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* MIDDLEWARE */
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
    console.log("MongoDB Connection Error ❌");
    console.log(err);
  });

/* AUTH ROUTES */
const authRoutes = require("./routes/authRoutes");

/* BIKE ROUTES */
const bikeRoutes = require("./routes/bikeRoutes");

/* API ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/bikes", bikeRoutes);

/* SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT} 🚀`);
});