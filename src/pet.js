function Pet (name, age, hunger, fitness) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function() {
    /*if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    };*/
    return this.age += 1;
};

Pet.prototype.hungrier = function() {
    this.hunger += 5;
};

Pet.prototype.lessfit = function() {
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    const maxFitness = 10;

    if (this.fitness < (maxFitness - 4)){
        return this.fitness += 4;
    };
    return this.fitness = 10
};

Pet.prototype.feed = function () {
    /*if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    };*/
    
    const lowestHunger = 0;

    if (this.hunger > (lowestHunger + 3)){
        return this.hunger -= 3;
    };
    return this.hunger = 0
};

Pet.prototype.checkUp = function () {
    const UnFit = (this.fitness <= 3);
    const Hungry = (this.hunger >= 5);    

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
};

Pet.prototype.isAlive = function () {
    const Fitness = (this.fitness <= 0);
    const Hunger = (this.hunger >= 10);
    const Age = (this.age >= 30);

    if (!Fitness && !Hunger && !Age) {
        return "true"
    };
    return "false"
};
/*if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
}*/





module.exports = Pet;