//////////////////////////////////
// ES6 - Rest and Spread Operator
//////////////////////////////////
/*
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers(1,2,3,4,5,6,7,8,8,9,55));
*/

// =======================================
/*
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange' ];
// ES5
console.log(defaultColors.concat(userFavoriteColors));
// => [ 'red', 'green', 'orange', 'yellow' ]

// ES6 - spread operator

console.log([ ...defaultColors, ...userFavoriteColors ]);
// => [ 'red', 'green', 'orange', 'yellow' ]

console.log([ ...defaultColors, userFavoriteColors ]);
// => [ 'red', 'green', [ 'orange', 'yellow' ] ]

console.log([ defaultColors, userFavoriteColors ]);
// => [ [ 'red', 'green' ], [ 'orange', 'yellow' ] ]

console.log([ ...fallColors, ...defaultColors, ...userFavoriteColors ]);

console.log([ 'green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ]);

var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);
// => [ 'head', 'shoulders', 'knees', 'and', 'toes' ]
*/
// ===============================================
/*
function validateShoppingList(...items) {

    if (items.indexOf('milk') < 0) {
        return [ 'milk', ...items ];
    }
    
    return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));
*/

// ===============================================
/*
// ES5
const MathLibrary2 = {
    calculateProduct(a, b) {
        return a * b;
    },
    multiply(a, b) {
        return a * b;
    }
};

// ES6
const MathLibrary1 = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};
*/
// ===============================================

// Many, Many Arguments

// ES5
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// ES6
function product(...numbers) {

  return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1,2,3,4,5));

// ==================================

// ES5
function join(array1, array2) {
  return array1.concat(array2);
}

// ES6
function join(array1, array2) {
  return [ ...array1, ...array2 ];
}

// ===================================

// ES5
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

// ES6

//pass array and pass rest of the numbers
function unshift(array, ...numbers) {
  //spread numbers and spread the array
  return [...numbers,...array];
}