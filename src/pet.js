const Max_AGE = 30;
const Min_HUNGER = 0;
const Max_HUNGER = 10;
const Min_FITNESS = 0;
const Max_FITNESS = 10;

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        const fitness = (this.fitness <= Min_FITNESS);
        const hunger = (this.hunger >= Max_HUNGER);
        const age = (this.age >= Max_AGE);
    
        return !fitness && !hunger && !age;
        },

    growUp() {
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        return this.age += 1, this.hunger += 5, this.fitness -= 3;
    },

    walk() {
        
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        if (this.fitness < (Max_FITNESS - 4)){
            return this.fitness += 4;
        };
        return this.fitness = Max_FITNESS
    },

    feed() {
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        
        if (this.hunger > (Min_HUNGER + 3)){
            return this.hunger -= 3;
        };
        return this.hunger = Min_HUNGER
    },

    checkUp() {
        const unFit = (this.fitness <= 3);
        const hungry = (this.hunger >= 5);    
    
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        if (!hungry && unFit) {
            return "I need a walk";
        };
        if (hungry && !unFit) {
            return "I am hungry";
        };
        if (hungry && unFit){
            return "I am hungry AND I need a walk";
        };
        return "I feel great!"
    },

    adoptedChild(children) {
        this.children.push(children)
    }
};
module.exports = { Pet, Max_AGE, Min_FITNESS, Max_HUNGER};