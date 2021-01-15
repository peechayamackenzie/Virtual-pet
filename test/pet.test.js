const Pet = require("../src/pet");

const pet = new Pet("Fido");

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

describe("gets older", () => {
    it("throws an error if the pet is not alive", () => {
        pet.age = 30;

        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
    });

    it("increase the age by 1", () => {
        pet.age = 0
        pet.growUp();

        expect(pet.age).toBe(1)
    });
});

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

describe("walk to increase fitness by 4 but cap at 10", () => {
    it("throws an error if the pet is not alive", () => {
        pet.fitness = 0;
  
        expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    });
    it("walk", () => {
        pet.fitness = 7
        pet.walk();

        expect(pet.fitness).toBe(10)
    });
});

describe("feed to reduce hunger by 3 but cap at 0", () => {
    
    it("throws an error if the pet is not alive", () => {
        pet.hunger = 10;
  
        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });

    it("feed", () => {
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toBe(2)
    });
});

describe("talk to pet if feeding and walking needed", () => {
    it("throws an error if the pet is not alive", () => {
        pet.hunger = 10;
  
        expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });
    
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

describe("shows how the pet is feeling", () => {
    it("isAlive fitness", () => {
        pet.fitness = 0;
        pet.hunger = 3;
        pet.age = 15;
    
        expect(pet.isAlive).toBe(false)
    });

    it("isAlive hunger", () => {
        pet.fitness = 5;
        pet.hunger = 10;
        pet.age = 15;
    
        expect(pet.isAlive).toBe(false)
    });

    it("isAlive age", () => {
        pet.fitness = 10;
        pet.hunger = 3;
        pet.age = 30;
    
        expect(pet.isAlive).toBe(false)
    });

    it("isAlive overall", () => {
        pet.fitness = 8;
        pet.hunger = 3;
        pet.age = 15;
    
        expect(pet.isAlive).toBe(true)
    });
});