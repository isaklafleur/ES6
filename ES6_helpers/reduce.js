///////////////////////
// ES6 - reduce helper
///////////////////////
/*
var numbers = [10, 20, 30];

var sum = 0;


for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log('ES5 with for loop:', sum);


numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
console.log(sum);
*/

// ====================================================================
/*
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

// use map helper
var primaryColorArrayMap = primaryColors.map(function(primaryColor) {
    return primaryColor.color;
});
console.log(primaryColorArrayMap);

// use reduce helper
var primaryColorArrayReduce = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);
console.log(primaryColorArrayReduce);
*/

// ====================================================================

