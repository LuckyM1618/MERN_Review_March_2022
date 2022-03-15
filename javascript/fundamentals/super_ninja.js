// class name Ninja
class Ninja {
    // two attributes: name and health; only name taken as parameter
    constructor(name, speed = 3, strength = 3, health = 200) {
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

        return this;
    }
}

class Sensei extends Ninja {
    constructor(name, speed = 10, strength = 10, health = 200, wisdom = 10) {
        super(name, speed, strength, health);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("If at first you don't succeed, check Stack Overflow");

        return this;
    }
}

const shredder = new Sensei("Master Shredder");
console.log(shredder);
shredder.sayName().showStats().drinkSake();
shredder.speakWisdom().showStats();