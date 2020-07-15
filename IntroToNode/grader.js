function average(scores){
    //add all scores together
    var sum = 0;
    for(var i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    // ***use forEach instead
    // var sum = 0
    // scores.forEach(function(score){
    //     sum += score;
    // })

    //divide by total number of scores
    var avg = sum/scores.length;

    //round average
    return Math.round(avg);
}
console.log("Avarage scores of future scientists")
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Avarage scores of organic chemistry")
var scores2 = [80, 68, 89, 70, 80, 76, 64];
console.log(average(scores2));
