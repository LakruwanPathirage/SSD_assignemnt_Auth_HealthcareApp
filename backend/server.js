const express = require("express");
const mongoose = require("mongoose");
const users = require("./User_model/users");
const authRoutes = require("./routings/autheticate_userRoute");
const userRoutes = require("./routings/userworksRoutes");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./configurations/passport_initiala");
// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
    "mongodb+srv://ssdassignment:ssdassigment1@@cluster0.lggig.mongodb.net/doctor_reservation?retryWrites=true&w=majority";

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        //cookie encryption
        app.use(
            cookieSession({
                name: "Echanneling",
                maxAge: 1 * 60 * 60 * 1000,
                keys: ["sumudlak123"],
            })
        );
        //initialize passort session handling
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(express.json());

        //enable CORS
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "http://localhost:1776");
            res.header("Access-Control-Allow-Methods", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });

        //base url
        app.get("/", (req, res) => {
            res.status(200).json({ status: true });
        });

        //Navigate to mentioned route
        app.use("/auth", authRoutes);
        app.use("/profile", userRoutes);

        //port server listens
        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });
    })
    .catch(err => console.log(err));
