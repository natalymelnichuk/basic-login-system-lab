
require("./models/User.js")
require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js")


mongoose.connect(process.env.MONGO_URI);


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
    
})