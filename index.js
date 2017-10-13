var express = require("express"),
    app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("main");
});






app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Homepage has started!");
});
