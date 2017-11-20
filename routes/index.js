var express = require("express");
var router = express.Router();
// var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

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
    res.render("contact", {msg: ""});
});

router.post("/send", function(req, res){
    var output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.subject}</p>
    <p>${req.body.message}</p>
    `
    
  ;

    console.log(output);

    
    
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        // service: "bluehost",
        host: 'mail.stevenlian.com',
        port: 26,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "main@stevenlian.com", // generated ethereal user
            pass: "Aslasym4$$"  // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
        }); 
        
     // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <main@stevenlian.com>', // sender address
        to: 'stevenlian1994@gmail.com', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };


        transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
    
        res.render("contact", {msg:"Email has been sent"});
});


module.exports = router;