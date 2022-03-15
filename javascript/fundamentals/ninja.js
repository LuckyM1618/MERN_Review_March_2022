// class name Ninja
class Ninja {
    // two attributes: name and health; only name taken as parameter
    constructor(name, speed = 3, strength = 3, health = 100) {
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.health = health;
    }

    sayName() {
        console.log(`This ninja's name is ${this.name}`);

        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);

        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake! Health increased to ${this.health}!`);

        return this;
    }
}

const ninja_don = new Ninja('Donatello');
console.log(ninja_don);
ninja_don.sayName().showStats().drinkSake();
