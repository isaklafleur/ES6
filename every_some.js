//////////////////////////
// ES6 - every helper (&&)
//////////////////////////
/*
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

// ES5
for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}
console.log('ES5');
console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);
// ==========================================================

// ES6 - every helper
console.log('ES6');

var checkComputersWithEvery = computers.every(function(computer) {
    return computer.ram > 13;
});

console.log(checkComputersWithEvery);

//////////////////////////
// ES6 - some helper (||)
//////////////////////////

var checkComputersWithSome = computers.some(function(computer) {
    return computer.ram > 16;
});

console.log(checkComputersWithSome);

*/
// ==========================================================
/*
var names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

var everyTest = names.every(function(name) {
    return name.length > 4;
});

var someTest = names.some(function(name) {
    return name.length > 4;
});

console.log('Every:', everyTest);

console.log('Some:', someTest);

*/

// ==========================================================
/*
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('password');
var birthdate = new Field('21/04/1982');

//username.validate() && password.validate();

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
    return field.validate();
});

if(formIsValid) {
    // allow user to submit!
} else {
    //show an error message
}
*/
// ==========================================================
/*
// Finding Submitted Users
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted;
});
*/

//In Progress Network Requests
/*
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status; 
});
*/