//this includes the vehicle class as a module
const Vehicle = require("./vehicleBaseClass")



class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 6; 
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.serviceNeeded = false;
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }

    loadPassenger(num){
        if((this.passenger + num <= this.maxPassengers) && (this.passenger + num >= 0)){
            this.passenger += num;
            console.log(`All passengers loaded: there are ${this.passenger} passengers.`)
        } else if(this.passenger + num >= 0) {
            console.log(`There are ${num+this.passenger - this.maxPassengers} too few seats.`)
        } else{
            console.log('Error: cannot have less than 0 passengers.')
        }
    }

    scheduleService(newmileage){
        this.mileage += newmileage;
        if(this.mileage >= 30000){
            console.log(`Service needed.`)
            return this.serviceNeeded = true;
        } else{
            console.log(`Service needed in ${30000 - Number(this.mileage)} miles.`)
        }
    }

}

let mercurySedan = new Car("Mecury", "Sedan", "1965", "color", 0);
console.log(mercurySedan);

