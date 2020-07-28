/*The sum of the squares of the first ten natural numbers is, 385

The square of the sum of the first ten natural numbers is, 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385= 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

var sum = 0;

for( var i = 1 ; i<=100 ; i ++) {
 sum += i; 
}

var squareOfTheSum = sum * sum ;
console.log(squareOfTheSum);
sum = 0;
for( var j = 1 ; j<=100 ; j ++) {
 sum += j *j; 
}
var sumOfTheSquares = sum;
console.log(sumOfTheSquares);
var difference = squareOfTheSum - sumOfTheSquares;
console.log(difference);