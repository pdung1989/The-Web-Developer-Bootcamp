var express = require("express");
var app = express();

// "/" ==> "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" ==> "Goodbye!"

app.get("/bye", function(req, res){
    res.send("Goodbye!!!");
});

// "/dog" ==> "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW");
});

//Route parameters
app.get("/r/:subredditName", function(req, res){
   var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT SITE!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS!");
})
app.get("*", function(req, res){
    res.send("YOU ARE A SUPER STAR");
});

//Tell Express to listen for requests (start server)

app.listen(3000, function(){
    console.log("Server has started!");
});