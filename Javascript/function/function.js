// isEven

// function  isEven(num) {
//     if(num % 2 ===0 ) {
//         return true;
//     }
//    else {
//        return false;
//    }
// }

function isEven(num) {
    return num % 2 === 0;
}

// factorial()
// factorial (4)  4 x 3 x 2 x 1

// option 1
function factorial(num) {
    if(num === 0) {
        return 1;
    }
  // define a result variable
    var result = num;
    // calculate factorial and store value in result
    for(var i = num-1; i >= 1; i--) {
        result *= i;
    }
    // return the result variable
    return result;
}
   
// option 2

function factorial(num){
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}

//     function factorial(n) {
//     if(n < 0) {
//         return -1;
//     }
//     else if(n === 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n-1);
//     }

// }

// kebabToSnake
function kebabToSnake(mystr) {
    return mystr.replace(/-/g, "_");
}

or 
// function kebabToSnake(mystr) {
//    var newstr = mystr.replace(/-/g, "_");
//    return newstr;
// }
