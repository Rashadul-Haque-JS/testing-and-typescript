"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sportsCar = void 0;
const sportsCar = (data) => {
    const desc = `${data.model} is a latest model of ${data.carName} car manufecturing company situated in ${data.country}.This car is type of '${data.type}' with top speed ${data.speed} mph. It's been designed to be powered by ${data.fuel}. It has ${data.seat} seats and is available now with the total cost of $${data.price} million.`;
    return desc;
};
exports.sportsCar = sportsCar;
