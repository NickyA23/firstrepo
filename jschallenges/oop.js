class Pet {
    constructor(name, age, type, breed, colour, time) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.colour = colour;
    this.lastFed = time;
    }
    get petInfo () {
        return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
        const array = name.split(' ');
        this.firstname = array[0];
        this.surname = array[1];
    }
    feedPet (time) {
    this.lastFed = time;
    return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
    }

   const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
   Bella.fullName = "Bella Crompton";

   console.log(Bella);
   

//    console.log(Bella);
//    console.log(Bella.feedPet("15:00"));
//    console.log(Bella);

//class Pet {
//    constructor(name, age, type, breed, colour, time) {
//    this.name = name;
//    this.age = age;
//    this.type = type;
//    this.breed = breed;
//    this.colour = colour;
//    this.lastFed = time;
//   }
//    feedPet (time) {
//    this.lastFed = time;
//    return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//    }
//    }
//    const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
//    const Barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00");
//    const Betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00");

    

    //class PetMeds extends Pet {
    //    constructor(name, age, type, breed, colour, time, mtime) {
    //    super(name, age, type, breed, colour, time);
    //    this.lastMeds = mtime;
    //    }
    //    giveMeds (time) {
    //    this.lastMeds = time;
    //    return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    //    }
    //    }   

    //class Pet {
    //    constructor(name, age, type, breed, colour, time) {
    //    this.name = name;
    //    this.age = age;
    //    this.type = type;
    //    this.breed = breed;
    //    this.colour = colour;
    //    this.lastFed = time;
    //    }
    //    feedPet (time) {
    //    this.lastFed = time;
    //    return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    //    }
    //    }
    //    class PetMeds extends Pet {
    //    constructor(name, age, type, breed, colour, time, mtime) {
    //    super(name, age, type, breed, colour, time);
    //    this.lastMeds = mtime;
    //    }
    //    giveMeds (time) {
    //    this.lastMeds = time;
    //    return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    //    }
    //    }
    //    const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
    //    const Barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
    //    const Betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00");

    //    console.log(Betty)

    //    class Rental {
    //        constructor(name, address, number, movies) {
    //            this.name = name;
    //            this.address = address;
    //            this.number = number;
    //            this. movies = movies;
    //        }
    //    }
    //    const test = new Rental("Blockbuster", "20 King Street","01565 755333","Scarface, Limitless, The Matrix");

    //    console.log(test)
