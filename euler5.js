//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var check = false;
var number = 0;
var increment = 2520;

while (check !== true ) {
    number += increment;
    if (number%11 === 0) {
        increment = number;
        console.log('The number ' +number + ' is the lowest number evenly divisable by all numbers from 1 to 11!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%12 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 12!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%13 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 13!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%14 === 0) {
        increment = number;
        console.log('The number ' + number+ ' is the lowest number evenly divisable by all numbers from 1 to 14!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%15 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 15!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%16 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 16!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%17 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 17!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%18 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 18!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%19 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 19!');
        check = true;
        number = 0;
    }
}
check = false;
while (check !== true ) {
    number += increment;
    if (number%20 === 0) {
        increment = number;
        console.log('The number ' +number+ ' is the lowest number evenly divisable by all numbers from 1 to 20!');
        check = true;
        number = 0;
    }
}