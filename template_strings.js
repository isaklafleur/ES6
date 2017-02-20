//////////////////////////
// ES6 - Template Strings
//////////////////////////
/*
// ES6
function getMessage() {
    const year = new Date().getFullYear();
    return 'The year is ' + year;
}
console.log(getMessage());


// ES6 with Template String

// Option 1
function getMessage() {
    const year = new Date().getFullYear();

    return `The year is ${year}`;
}
console.log(getMessage());

// Option 2
function getMessage() {
    return `The year is ${new Date().getFullYear()}`;
}
console.log(getMessage());
*/

// =======================================================

const device_id = 4;
const guid = 20;
const username = 'Hello';

//ES5
const data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","}';
console.log(data);

// ES6 with template String
const data2 = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;
console.log(data2);

// ==============================================

// Template Strings in Practice

// ES5
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}

// ES6 
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

// =================================================

// ES5
function fullName(firstName, lastName) {
  return firstName + lastName;
}

// ES6
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}