///////////////////////
// ES6 - filter helper
///////////////////////

/*
var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];

var filteredProducts1 = [];
var filteredProducts2 = [];
// ES5
for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts1.push(products[i]);
    }
}
console.log(filteredProducts1);

// ES6 - .filter
var filteredProducts2 = products.filter(function(product) {
    return product.type === 'fruit';
});
console.log(filteredProducts2)

// ==========================================

var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', qunatity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

var filteredProducts = products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 14;
});
console.log(filteredProducts);

// ===========================================

var post = { id:4, title: 'New Post' };

var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}
console.log(commentsForPost(post, comments));

// ===========================================

// Filtering Values

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});

// ===========================================

// Handling Permissions with Filter

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin;
});

*/