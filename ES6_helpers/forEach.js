///////////////////////
// ES6 - forEach helper
///////////////////////

/*
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

// ==============================


// Moving Away from For Loops

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    //ES5
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
    
    //ES6
    posts.forEach(savePost);
}

// ==============================

//Processing Values

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

//ES6
images.forEach(function(image) {
    areas.push(image.height * image.width);
});
*/

