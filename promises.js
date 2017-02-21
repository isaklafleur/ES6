//////////////////////////
// ES6 - Promises
//////////////////////////

/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
});

promise
    .then(() => {
        console.log('finally finished!');
    })
    .then(() => {
        console.log('I was also ran!!')
    })
    .catch(() => console.log('Ops it got rejected!'));
*/
// ===================================================

//////////////////////////
// ES6 - fetch function
//////////////////////////

const url = 'https://jsonplaceholder.typicode123.com/posts/34334';

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('Bad', error));