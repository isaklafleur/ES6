///////////////////////
// ES6 - reduce helper
///////////////////////

var numbers = [10, 20, 30];

var sum = 0;

/*
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log('ES5 with for loop:', sum);
*/

numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log('ES6 with the Reduce Helper:', sum);
