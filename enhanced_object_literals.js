//////////////////////////////////
// ES6 - Enhanced Object Literals
//////////////////////////////////

function createBookShop(inventory) {
    return {
        //ES5: inventory: inventory,
        inventory,
        //ES5: inventoryValue: function() {
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}
const inventory = [
    { title: 'Harry Potter', price: 15 },
    { title: 'Eloquent Javascript', price: 20 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));


// ===============================================


function saveFile(url, data) {
    //ES5: $.ajax({ method: 'POST', url: url, data: data });
    //if we have key and a value and they are the same, then the value can be removed.
    $.ajax({ url, data, method: 'POST' });
}

const url = 'http://www.files.com';
const data = { color: 'red' };

saveFile(url, data);

// =========================================
