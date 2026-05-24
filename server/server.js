const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

/* VERY IMPORTANT */
const corsOptions = {
  origin: "https://bike-sale-prediction.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ Handle preflight requests

app.use(express.json());

/* TEST */
app.get("/", (req, res) => {
  res.send("API Running ✅");
});

/* ROUTES */
const authRoutes = require("./routes/authRoutes");
const bikeRoutes = require("./routes/bikeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/bikes", bikeRoutes);

/* DATABASE */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log(err);
  });

/* SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});