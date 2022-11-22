import { sportsCar} from "./car";

const carData = {
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



const newCar = sportsCar(carData);
console.log(newCar);
