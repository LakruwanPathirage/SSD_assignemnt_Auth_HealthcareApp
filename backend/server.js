const express = require("express");
const mongoose = require("mongoose");


const app = express();



//port server listens
app.listen(3000, () => {
    console.log("Server Satrted at port 3000");
});
