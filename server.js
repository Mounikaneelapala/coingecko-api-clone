const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/auth",require("./routes/authRoutes"));

app.use("/api/coins",require("./routes/coinRoutes"));
app.use("/api/markets",require("./routes/marketRoutes"));

app.listen(process.env.PORT,()=>{
    console.log("Server Running");
});