function Pet (name, age, hunger, fitness, children) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        const Fitness = (this.fitness <= 0);
        const Hunger = (this.hunger >= 10);
        const Age = (this.age >= 30);
    
        return !Fitness && !Hunger && !Age;
        },

    growUp() {
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        return this.age += 1;
    },

    hungrier() {
        this.hunger += 5;
    },

    lessfit() {
        this.fitness -= 3;
    },

    walk() {
        const maxFitness = 10;
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        if (this.fitness < (maxFitness - 4)){
            return this.fitness += 4;
        };
        return this.fitness = 10
    },

    feed() {
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        
        const lowestHunger = 0;
    
        if (this.hunger > (lowestHunger + 3)){
            return this.hunger -= 3;
        };
        return this.hunger = 0
    },

    checkUp() {
        const UnFit = (this.fitness <= 3);
        const Hungry = (this.hunger >= 5);    
    
        if (!this.isAlive) {
            throw ("Your pet is no longer alive :(");
        };
        if (!Hungry && UnFit) {
            return "I need a walk";
        };
        if (Hungry && !UnFit) {
            return "I am hungry";
        };
        if (Hungry && UnFit){
            return "I am hungry AND I need a walk";
        };
        return "I feel great!"
    },

    adoptedChild(children) {
        return this.children.push(children);
    }
    
};
module.exports = Pet;