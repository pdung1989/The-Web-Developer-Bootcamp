var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//Route parameter
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow Meow",
        duck: "Quak Quak"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The "+ animal + " say '" + sound + "'");
});

//Another route parameters

app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i < times; i++ ){
        result += word + " ";
    };
    res.send(result);
});

//If a user visits any other route, print:"Sorry, gage not found!"
app.get("*", function(req, res){
    res.send("Sorry, page not found!");
});


//Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log("Server has started!");
});