//Problem 2
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var fibonacci = [1,1];
var fibonacciEven = [];
var i = 1;
while ( i  < 4000000) {
    i += fibonacci[fibonacci.length - 2];
    if( i < 4000000) {
    fibonacci.push(i);
    console.log(i);
    }
}
//console.log(fibonacci);

for (var i = 0 ; i < fibonacci.length ; i++){
    if ( fibonacci[i]%2 === 0) {
        fibonacciEven.push(fibonacci[i]);
    }
}
//console.log(fibonacciEven);
console.log(  fibonacciEven.reduce((a, b) => a + b, 0));



