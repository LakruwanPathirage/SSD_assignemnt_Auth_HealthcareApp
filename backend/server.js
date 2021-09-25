const express = require("express");
const mongoose = require("mongoose");


const app = express();

const dbURI =
    "mongodb+srv://ssdassignment:ssdassigment1@@cluster0.lggig.mongodb.net/doctor_reservation?retryWrites=true&w=majority";

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {})


//port server listens
app.listen(3000, () => {
    console.log("Server Satrted at port 3000");
})
.catch(err => console.log(err));
