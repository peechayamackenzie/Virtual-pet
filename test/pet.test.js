const Pet = require("../src/pet");

const pet = new Pet("Fido");

//1. give pet a name and age
describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object)
    });

    it("sets the name property", () =>{
        expect(pet.name).toBe("Fido")
    });

    it("check initial age", () => {
        expect(pet.age).toBe(0);
    });
});

//2. get them older
describe("growUp", () => {
    xit("check growUp", () => {
        pet.age = 30;

        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
    });

    it("increase the age by 1", () => {
        pet.age = 0
        pet.growUp();

        expect(pet.age).toBe(1)
    });
});

//3. as they are older - get hungry and less fit
describe("Getting Older, Getting Unhealthier", () => {
    it("check initial hunger", () => {
        expect(pet.hunger).toBe(0);
    });

    it("hungrier", () => {
        pet.growUp();
        pet.hungrier();

        expect(pet.hunger).toBe(5)
    });

    it("check initial fitness", () => {
        expect(pet.fitness).toBe(10);
    });

    it("lessfit", () => {
        pet.growUp();
        pet.lessfit();

        expect(pet.fitness).toBe(7)
    });
});

//4. walk pet to increase fitness - fitness increases by 4 but cap at 10
describe("walk to increase fitness by 4 but cap at 10", () => {
    it("walk", () => {
        pet.walk();

        expect(pet.fitness).toBe(10)
    });
});

//5. feed pet to decrease hunger
describe("feed to reduce hunger by 3 but cap at 0", () => {
    
    xit("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow("Your pet is no longer //alive :(");
    });

    it("feed", () => {
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toBe(2)
    });
});

//6. talk to pet if feeding and walking needed
describe("talk to pet if feeding and walking needed", () => {
    it("checkUp fitness", () => {
        pet.fitness = 1;
        pet.hunger = 3;
    
        expect(pet.checkUp()).toBe("I need a walk");
    });

    it("checkUp hunger", () => {
        pet.fitness = 4;
        pet.hunger = 6;

        expect(pet.checkUp()).toBe("I am hungry");
    });

    it("checkUp both", () => {
        pet.fitness = 1;
        pet.hunger = 6;

        expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });

    it("checkUp both", () => {
        pet.fitness = 4;
        pet.hunger = 4;

        expect(pet.checkUp()).toBe("I feel great!");
    });
});

//7. pet dies if too unfit or hungry or age 30 days
describe("shows how the pet is feeling", () => {
    it("isAlive fitness", () => {
        pet.fitness = 0;
        pet.hunger = 3;
        pet.age = 15;
    
        expect(pet.isAlive()).toBe("false");
    });

    it("isAlive hunger", () => {
        pet.fitness = 5;
        pet.hunger = 10;
        pet.age = 15;
    
        expect(pet.isAlive()).toBe("false");
    });

    it("isAlive age", () => {
        pet.fitness = 10;
        pet.hunger = 3;
        pet.age = 30;
    
        expect(pet.isAlive()).toBe("false");
    });

    it("isAlive overall", () => {
        pet.fitness = 8;
        pet.hunger = 3;
        pet.age = 15;
    
        expect(pet.isAlive()).toBe("true");
    });
});

//8. add some guard clauses to the walk, growUp and feed functions to prevent them from being used if the pet is not alive
describe("throw error message if pet isn't alive", () => {
    xit("check walk", () => {
        pet.fitness = 0;

        expect(pet.walk()).toThrow("Your pet is no longer alive :(");
    });

    xit("check feed", () => {
        pet.hunger = 10;

        expect(pet.feed()).toThrow("Your pet is no longer alive :(");
    });
    
    xit("check checkUp", () => {
        pet.fitness = 0;
        pet.hunger = 3;
        pet.age = 15;
    
        expect(pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });

    xit("check isAlive", () => {
        pet.fitness = 0;
        pet.hunger = 3;
        pet.age = 15;
    
        expect(pet.isAlive()).toThrow("Your pet is no longer alive :(");
    });
});