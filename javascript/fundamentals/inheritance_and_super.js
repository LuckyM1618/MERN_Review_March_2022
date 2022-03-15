class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }

    parentFunction() {
        return "This is coming from the parent!";
    }
}


class M5 extends Vehicle {
    constructor(color) {
        super("BMW","M5", color);
        this.hp = 616;
    }

    printSpecSummary() {
        console.log(
            `BMW M5 with a 4.4L V8 Twin Turbo engine packin ${this.hp} HP and 553 lb-ft TQ`
        );
    }

    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
}

const car = new Vehicle("BMW","M5","blue");
const bmw = new M5("red");
console.log(car);
console.log(bmw);


car.drive();
bmw.drive();

bmw.childFunction();