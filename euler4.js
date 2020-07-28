var sixDigitNumbers = [];

for (var i = 900 ; i < 1000 ; i++) {
    for (var j = 900 ; j < 1000 ; j++) {
        var result = i * j ;
        if ( result.toString()[0] === result.toString()[result.toString().length - 1] 
            && result.toString()[1] === result.toString()[result.toString().length - 2] 
            && result.toString()[2] === result.toString()[result.toString().length - 3]) {
                sixDigitNumbers.push(result);
        }
    }
}

var max = sixDigitNumbers.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max);
