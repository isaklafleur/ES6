//////////////////////////
// ES6 - Destructuring
/////////////////////////
/*
// ES5
var expense = {
    type: 'Business',
    amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6 Option 1
//const { type } = expense;
//const { amount } = expense;

// ES6 Option 2
const { type, amount } = expense;

console.log(type);
console.log(amount);
*/

// ===================================================
/*
var savedFile = {
    extension: 'jpg',
    name: 'report',
    size: 14040
};

function fileSummary({ name, extension, size }, { color }) {
    return `The ${color} file ${name}.${extension} is of size ${size} kb`;
}

console.log(fileSummary(savedFile, { color: 'red' }));
*/

// ============================================
/*
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

// ES6
const [ name, name2, name3, name4 ] = companies
console.log(name);
console.log(name2);
console.log(name3);
console.log(typeof name4);

// ES5
const firstCompany = companies[0];
console.log(firstCompany);

// ES6
const [ name5 ] = companies;
console.log(name5);

// ES6
const { length } = companies;
console.log(length);
// => 3

const [ name6, name7, ...rest ] = companies;

console.log(name6);
console.log(name7);
console.log(...rest);
*/

// =========================================
/*
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
];

// ES5
var locationGoogle = companies[0].location;
console.log(locationGoogle);

// ES6
const [{ location }] = companies;

console.log(location);

*/

// ================================================
/*

const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const { locations } = Google;
console.log(locations);

const { locations: [ location ] } = Google;
console.log(location);
*/

// =================================================
/*
function signup({ username, password, email, dateOfBirth, city }) {
    // create new user
}

// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'isak@testing.com',
    dateOfBirth: '21/04/1982',
    city: 'City of God'
};

signup(user);

*/

// ===================================
/*

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

/* ==> convert to:
[
    { x: 4, y: 5 },
    { x: 10, y: 1 },
    { x: 0, y: 40 }
]
*/
/*
var convertion = points.map(([ x, y ]) => {
    return { x, y };

});
console.log(convertion);
*/
// ===================================================
/*
// Destructuring in Practice 

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

// ES5
function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

// ES6
function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}
*/
// ==================================
/*
//Array Destructuring in Practice

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
   return { subject, time, teacher }; 
});

console.log(classesAsObject);

*/
// ===================================
/*
// Recursion with Destructuring

const numbers = [1, 2, 3];

function double([first, ...rest], accum = []) {

    if (rest.length) {
        accum.push(first * 2);
        return double(rest, accum);
    } else {
        accum.push(first * 2);
        return accum;
    }
}

function double([number, ...rest]) {
    return !number ? [] : [number * 2, ...double(rest)];
}
*/

