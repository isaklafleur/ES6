////////////////////////////////////
// ES6 - Default function arguments
////////////////////////////////////
/*
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }
    //Logic to make the request
}
makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');


function makeAjaxRequest(url, method = 'GET') {
    return method;
    //Logic to make the request
}
console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));
*/

// ==========================================================
/*
// ES5
function User(id) {
    this.id = id;
}
var UserIsak = new User(1);

function generateId() {
    return Math.random() * 9999999;
}

function createAdminUser(user) {
    user.admin = true;
    return user;
}

createAdminUser(new User(generateId()));

// ES6 with default function arguments

function User(id) {
    this.id = id;
}
var UserIsak = new User(1);

function generateId() {
    return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}
const userTest = new User(generateId())
console.log(createAdminUser(userTest));
*/
// ===================================
/*
// ES5
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }

  if (b === undefined) {
    b = 0; 
  }

  return a + b;
}

// ES6
function sum(a = 0, b = 0) {

  return a + b;
}
*/
// ==================================

//Dumping Unused Code

// ES5
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}

// ES6
function addOffset(style = {}) { 
  style.offset = '10px';
  
  return style;
}