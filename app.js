var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    nodemailer = require("nodemailer");
    
    
var indexRoutes = require("./routes/index");
    
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/doodle", {useMongoClient: true});


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//gets the css file working
app.use(express.static('public'));


app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Homepage has started!");
});

