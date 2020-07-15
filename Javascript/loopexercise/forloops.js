// for loops


console.log("Print all numbers between -10 and 19");

for(var n = -10; n < 20; n++) {
	console.log(n);
}



console.log("Print all even number between 10 and 40");

// for(var n = 10; n <= 40; n += 2) {
// 	console.log(n);
// }
for(var n1= 10; n1 <= 40; n1 +=1) {
	if(n1 % 2 === 0) {
		console.log(n1);
	}
}


console.log("Print all odd numbers between 300 and 333");
for(var n = 300; n <=333; n++) {
	if(n % 2 !== 0) {
		console.log(n);
	}
	
}

console.log("Print all number divisible by 5 and 3 betwwen 5 and 50");
for(var n = 5; n <= 50; n++) {
	if(n % 5 === 0 && n % 3 === 0) {
		console.log(n);
	}
}