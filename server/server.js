const express = require("express");
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

/* ROUTES */

const authRoutes =
require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

/* SERVER */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running on Port ${PORT} 🚀`
  );

});