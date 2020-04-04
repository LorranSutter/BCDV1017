class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.balance)}`;
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());