var express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/views'));


app.get("/", function(req, res){
    res.render("main");
});

app.get("/projects", function(req, res){
    res.render("projects");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.get("/contact", function(req, res){
    res.render("contact");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Homepage has started!");
});
