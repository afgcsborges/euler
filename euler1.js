//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.
var sumNumbers = [];
for (var i= 1 ; i < 1000; i++){
    if (i%3 === 0) {
        sumNumbers.push(i);
    }
    else if (i%5 === 0){
        sumNumbers.push(i);
    }
}
//console.log(sumNumbers);
console.log(  sumNumbers.reduce((a, b) => a + b, 0));