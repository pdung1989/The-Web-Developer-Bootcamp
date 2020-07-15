var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true, useUnifiedTopology: true }); 

var dinosaurSchema = new mongoose.Schema({
    name: String,
    age: Number,
    eating: String
});

var Dinosaur = mongoose.model("Dinosaur", dinosaurSchema);

//adding a new dinosaur to the database
// var dino = new Dinosaur({
//     name: "T-Rex",
//     age: 15,
//     eating: "meat"
// });

// dino.save(function(err, dinosaur){
//     if(err){
//         console.log("Something went wrong!")
//     } else {
//         console.log("We just save the dinosaur to the DB:")
//         console.log(dinosaur);
//     }
// });

Dinosaur.create({
    name: "Alosaurus",
    age:10,
    eating: "meat"
}, function(err, dinosaur){
    if(err){
        console.log(err);
    } else {
        console.log(dinosaur);
    }
});

//retrieve all cats from the DB and console.log each one

Dinosaur.find({}, function(err, dinosaurs){
    if(err){
        console.log("It is wrong!");
        console.log(err);
    } else {
        console.log("ALL THE DINOSAURS...");
        console.log(dinosaurs);
    }
})