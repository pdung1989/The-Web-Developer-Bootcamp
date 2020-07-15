var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//Compile the Schema into a model with a variable, then we can use the code of that var later on
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create (
//     {
//         name: "Sun", 
//         image: "https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_960_720.jpg",
//         description: "This is very peaceful, save campground. No water, no bathroom"
//     }, function(err,campground){
//         if(err){
//             console.log(err)
//         } else {
//             console.log("NEW CREATED CAMPGROUND")
//             console.log(campground)
//         }
//     });

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX route: show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campground from dadabase
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
  });

//CREATE route: Add new campground to database(DB)
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description
    var newCampground = {name: name, image: image, description: descls};
    //Create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
              //redirect back to camgrounds page
            res.redirect("/campgrounds");
        }
    }); 
});

//NEW route: show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW- shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
             //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log("YelpCamp server has started!");
});