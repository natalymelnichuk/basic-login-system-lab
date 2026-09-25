
require("./models/User.js")
require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");


const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
    
})