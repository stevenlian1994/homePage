var express = require("express");
var router = express.Router();


// Routes

router.get("/", function(req, res){
    res.render("main");
});

router.get("/projects", function(req, res){
    res.render("projects");
});

router.get("/about", function(req, res){
    res.render("about");
});

router.get("/contact", function(req, res){
    res.render("contact");
});

module.exports = router;