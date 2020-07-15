var mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/blog_demo", 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - emial, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "pdung1989@gmail.com",
    name: "Dung Tran"
});

newUser.posts.push({
    title: "How to make juice",
    content: "Open the books from the library"
});
newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

// var newPost = new Post({
//     title: "The sun embraces the moon",
//     content: "The film is very interesting"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });