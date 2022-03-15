class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
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
            if(this.stat === 'Power') {
                target.power += this.magnitude;
                console.log(`${this.name} played on ${target.name}! Power is now ${target.power}!`);
            } else if(this.stat === 'Resilience') {
                target.resilience += this.magnitude;
                console.log(`${this.name} played on ${target.name}! Resilience is now ${target.resilience}!`);
            }
        } else {
            console.log("Target must be unit!");
        }

        return this;
    }
}

// Turn 1.1 - Make an instance of "Red Belt Ninja"
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

// Turn 1.2 - Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "Resilience", 3);
hardAlgo.play(redBeltNinja);

// Turn 2.1 - Make an instance of Black Belt Ninja"
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Turn 2.2 - Make an instance of "Unhandled Promise Exception" and play it on "Red Belt Ninja"
const upr = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 3", "Resilience", -2);
upr.play(redBeltNinja);

// Turn 3.1 - Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const pair_prog = new Effect("Pair Programming", 3, "Increase target's power by 2", "Power", 2);
pair_prog.play(redBeltNinja);

// Turn 3.2 - "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja);