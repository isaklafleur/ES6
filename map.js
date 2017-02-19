///////////////////////
// ES6 - forEach helper
///////////////////////
/*
var numbers = [1,2,3];

var doubleNumbers = [];

// ES5 - for loop
for (var i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);


//ES6 - .map helper

var doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);
// =====================================


var cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'expensive' }
];

// ES6 - .map
var prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);

*/
// =====================================

// Plucking values

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});

// Calculating Values with Map

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;

});
console.log(speeds);

// Really Hard - Implementing 'Pluck'

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(paints, color) {
    return paints.map(function(paint) {
        return paint['color'];
    });
}
