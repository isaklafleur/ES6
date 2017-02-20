///////////////////////
// ES6 - find helper
///////////////////////
/*
var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' },
    { name: 'Alex' }
];

var user;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}
console.log(user);

user = users.find(function(user) {
    return user.name === 'Alex';
});

console.log(user);
*/
// ============================================
/*
function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

var findCar = cars.find(function(car) {
    return car.model === 'Focus'
});

console.log(findCar);
*/
// ============================================
/*
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

var findPost = function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}
console.log(findPost(posts, comment));
*/
// =============================================
/*
// Finding Admin Users

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin;
});
console.log(admin);
*/

// =============================================
// What's Your Balance?
/*
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
    return account.balance === 12;
})

console.log(account);
*/
// =============================================

// Really Challenging: Custom findWhere Helper

var ladders = [

  {id: 1, height: 20},
  {id: 3, height: 25},
  {id: 4, height: 34}
];

function findWhere(array, criteria) {
    var property = Object.keys(criteria)[0];
    return array.find(function(obj) {
        return obj[property] === criteria[property];
    });
}
console.log(findWhere(ladders, {height: 34}));