//** printReverse */
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([1,2,3,4,5]);
printReverse(['a','b','c','d','e']);

//** isUniform() */

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
            } 
        }
        return true;
    }

//Không dùng được cách này vì nếu return false của function (element), nó chỉ exit khỏi function đó mà ko exit khỏi function isUniform(), thus next level will return true
/* function isUniform(arr) {
    var first = arr[0];
    arr.forEach(function(element) {
        if(element !== first) {
            return false;
        }
        });
    return true;
    } */

//*/**  sumArray() */

    function sumArray(arr) {
        var total = 0;
        for(var i = 0; i < arr.length; i++) {
         total += arr[i];
         }
            return total
    }

// cách 2:
/* function sumArray(arr) {
    var result = 0;
    arr.forEach(function(element) {
        result += element;
    } );
    return result;
} */


function max(arr) {
    var maxNum = arr[0]
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}



var movies = [
    {title: "In Bruges",
    rating: 5,
    hasWatched: true },
    {title: "Frozen",
    rating: 4.5,
    hasWatched: false},
    {title: "Max Max Fury Road",
    rating: 5,
    hasWatched: true},
    {title: "Frozen",
    rating: 3.5,
    hasWatched: false},
]

movies.forEach(function(movie) {
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);

});

