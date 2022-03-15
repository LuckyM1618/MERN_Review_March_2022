class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, resilience, power) {
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }

    attack(target) {
        if(target instanceof Unit) {
            target.resilience -= this.power;
            console.log(`${this.name} attacked ${target.name} for ${this.power}, decreasing their resilience to ${target.resilience}!`);
        } else {
            console.log("Target must be unit!");
        }

        return this;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if(target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log(`${this.name} played on ${target.name}! ${this.stat.charAt(0).toUpperCase() + this.stat.slice(1)} is now ${target[this.stat]}!`);
        } else {
            console.log("Target must be unit!");
        }

        return this;
    }
}

const test_card = new Card("Test", 999);
console.log(test_card);

const test_unit = new Unit("Test Unit", 777, 9001, 9001);
console.log(test_unit);

const dark_test_unit = new Unit("Dark Test Unit",778, 9002,9002);
console.log(dark_test_unit);

const test_effect = new Effect("Test Effect", 0, "The card is a test", 'power', -2);

test_unit.attack(dark_test_unit);
dark_test_unit.attack(test_unit);
test_unit.attack(test_card);
test_effect.play(dark_test_unit);
