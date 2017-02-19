var colors = ['red', 'blue', 'green'];

//ES5 for loop
console.log('ES5');
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

//ES6 forEach
console.log('ES6');
colors.forEach(function(color) {
    console.log(color);
});

// ==============================

var numbers = [1,2,3,4,5];

var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

//ES5 for loop
console.log('ES5');
for (var i = 0; i < numbers.length; i++) {
    sum1+= numbers[i];
};
console.log(sum1);

//ES6 forEach
console.log('ES6');
numbers.forEach(function(number) {
    sum2+= number;

});

console.log(sum2);

console.log('forEach + and adder function');

function adder(number) {
    sum3+= number;
}

numbers.forEach(adder);

console.log(sum3);