var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/doodle", {useMongoClient: true});


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//gets the css working
app.use(express.static(__dirname + '/views'));

// Routes

app.get("/", function(req, res){
    res.render("main");
});

app.get("/lottery", function(req, res){
    res.render("lottery");
});

app.get("/projects", function(req, res){
    res.render("projects");
});

// app.get("/submissions", function(req, res){
//     res.render("submissions");
// });


var doodleSchema = new mongoose.Schema({
  name: String,
  doodle: String
});

var Doodles = mongoose.model("Doodle", doodleSchema);

app.get("/submissions", function(req, res) {
        
        // Get all doodles from DB
        Doodles.find({}, function(err, allDoodles){
            if(err){
                console.log(err);
            } else {
              res.render("submissions", {doodles: allDoodles}); 
            }
        });
        
});

app.post("/submissions", function(req, res) {
    var name = req.body.name;
    var doodle = req.body.doodle;
    var newDoodle = {name: name, doodle: doodle};
    //create a new campground and save to DB
    Doodles.create(newDoodle, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log("created new doodle and saved to DB?")
            res.redirect("/submissions");
        }
    });
});



app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Homepage has started!");
});

