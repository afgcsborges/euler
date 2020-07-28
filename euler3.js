//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?
/*var number = 600851475143;
for ( var i = 600851475142 ; i> 0 ; i--) {
    if (number%i === 0) {
        console.log(i);
    break;
    }
}*/
/*var primos = [2];
var foundPrimo = null;
for (var i = 2 ; i < 80000000 ; i ++) {
    for ( var j = 0 ; j < primos.length; j++) {
        if ( i%primos[j] === 0) {
            foundPrimo = null;
            break;
        }
        else if (i%primos[j] !== 0){
            foundPrimo = i;
        }
        
    }   if(foundPrimo !== null) {
        primos.push(foundPrimo);
        foundPrimo = null;
        
    }
}
console.log(primos);*/

/*function largestPrimeFactor(number) {
  let primesAndFactor = [];
  // find all factors
  for (let factorIterator = 0; factorIterator <= number; factorIterator++) {
    // check if factor; using our handy friend Modulo
    let isFactor = number % factorIterator == 0;
    let isPrime = true;

    if (isFactor) {
      // see if factor is a prime
      // a prime number has two factors, 1 and itself
      for (let i = 2; i < factorIterator; i++) {
        // console.log(i, factorIterator, factorIterator % i)
        if (factorIterator % i == 0) {
          isPrime = false;
          continue;
        }
      }
    }

    // if so, push to primes list
    if (isFactor && isPrime) {
      primesAndFactor.push(factorIterator);
    }
  } // end for loop

  // return last element of array
  return primesAndFactor.pop();
}

console.log(largestPrimeFactor(600851475143));*/



var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;
while(i<target) {
	while(target%i === 0) {
		(function(newtarget) {
			console.log(target + " can be divided by " + i + " which gives us " + newtarget);
			target = newtarget;
		})(target / i);
	}
	i++;
}
console.log("it seems like " + target + " is the biggest prime factor for " + originalTarget);