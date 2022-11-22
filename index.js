"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
const data = {
    carName: "Koenigsegg",
    model: "CC850",
    type: "sports car",
    year: "2022",
    price: 3.6,
    seat: 4,
    fuel: "Hybrid",
    speed: 250,
    country: "Sweden",
};
const newCar = (0, car_1.sportsCar)(data);
console.log(newCar);
