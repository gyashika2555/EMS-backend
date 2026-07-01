const express = require("express");
const cors = require("cors");
const app = express();
const dotenv=require("dotenv")
const mongoose = require("mongoose");

const employeeRoutes = require("./routes/employeeRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

dotenv.config()
// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management API Running");
});

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
  console.log("Connected to MongoDB");
})
.catch((err) =>{
  console.log(err);
});


app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});