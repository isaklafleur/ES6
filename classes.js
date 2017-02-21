//////////////////////////
// ES6 - Classes
/////////////////////////
/*
// ES5
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

const car = new Car({ title: 'Focus' });
console.log(car.drive());
console.log(car);


Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'Beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
*/

// ES6
/*
class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
*/

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    
    bite(snake) {
        return snake.health -= 10;
    }
}
const orm1 = new Snake({ name: 'Cobra'});
const orm2 = new Snake({ name: 'Skallerorm' });
console.log(orm1.bite(orm2));