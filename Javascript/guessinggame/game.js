// create secretNumber
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));

// guess is a number rather than string -->Number()

// check if guess is right

if(guess === secretNumber) {
	alert("you got it right");
}

// otherwise, you got it wrong

// else {
// 	alert("wrong")
// }


// check if guess is higher

else if(guess > secretNumber) {
  alert("Too high. Guess again!");
}

// check if guess is lower

else {
	alert("too low. Guess again");
}