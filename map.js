///////////////////////
// ES6 - forEach helper
///////////////////////

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