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
/*
function balancedParens(string) {
    return !string.split('').reduce(function(previous, char) {
        if (previous < 0) { return previous; }
        if (char === '(') { return ++previous; }
        if (char === ')') { return --previous; }
        return previous;
    }, 0);
}
console.log(balancedParens('())('));
*/
// ====================================================================

// Distance Traveled

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(base, trip) {
    return trip.distance + base;
}, 0);
console.log(totalDistance);
// => 47

///////////////////

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(base, sum) {
    return sum.distance + base;
}, 0);
console.log(totalDistance);
// => 47

///////////////////

var sum = 0;

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(base, sum) {
    return sum.distance + base;
}, 0);
console.log(totalDistance);
// => 47

// ==================================================

//Reducing Properties

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(tally, desk) {
    tally[desk.type] += 1;
    return tally;
    
    
}, { sitting: 0, standing: 0 });


// ==================================================

// Hardmode: Custom 'Unique' Helper
