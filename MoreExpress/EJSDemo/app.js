var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Playing outside", author: "Dung Tran"},
        {title: "I love the sunshine", author: "Susan"},
        {title: "Dinosaurs for kids", author: "Harry"}
    ]; 
    res.render("posts", {posts: posts});
})

app.listen(3000, function(){
    console.log("Server has started!");
});