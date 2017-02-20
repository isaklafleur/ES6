//////////////////////////
// ES6 - Arrow Functions
//////////////////////////
/*
// ES5
const add1 = function(a, b) {
    return a + b;
}
console.log(add1(1, 2));

// ES6 Option 1
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(1, 2));

// ES6 Option 2
const add3 = (a, b) => a + b;
console.log(add3(1, 2));
*/

// ===============================================================
/*
// ES5 - with normal function syntax
const double1 = function(number) {
    return 2 * number;
};

console.log(double1(8));

// ES6 with fat arrow function syntax

const double2 = (number) => {
    return 2 * number;
};

console.log(double2(8))

//////////////////////

const double3 = (number) => {
    return 2 * number;
};

console.log(double3(8))

//////////////////////

const double4 = number => 2 * number;
console.log(double4(8));

//////////////////////

const double5 = (number1, number2) => {
    return 2 * number1 + 2 * number2;
}
console.log(double5(8,8));

//////////////////////

const double6 = () => {
    return 2;
}
console.log(double6());
*/
//////////////////////
/*
const numbers = [1,2,3];

// ES5
numbers.map(function(number) {
    return 2 * number;
})


// ES6
console.log(numbers.map(number => 2 * number));
*/
///////////////////////////
// ES5 using bind function
/*
const team1 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`
        }.bind(this));
    }
};

console.log(team1.teamSummary());

// ES6 arrow function (using lexical this)
const team2 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`
        });
    }
};

console.log(team2.teamSummary());
*/
//////////////////////////////////////

// Refactoring Keyword Functions
/*
// ES5
const fibonacci1 = function(n) {
  if (n < 3) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

// ES6 with fat arrow function
const fibonacci2 = n => {
  if (n < 3) return 1;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}
*/
////////////////////////////////////

// Arrow Functions Aren't Always a Solution

// ES5
const profile1 = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }.bind(this) 
};
console.log(profile1.getName());

// ES6
const profile2 = {
    name: 'Alex',
    getName() {
        return this.name;
    }
};
console.log(profile2.getName());