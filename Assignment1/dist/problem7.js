"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge1() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge1());
}
