export interface ICar {
  carName: string;
  model: string;
  year: string;
  type: string;
  price: number;
  seat: number;
  fuel: string;
  speed: number;
  country: string;
}

const carData: ICar = {
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

const environment = process.env.NODE_ENV === "production" ? 'Production-mode-running' : 'Development-mode-running'

const carPageUI = `
  <h1 style="font-size:1rem">${environment}</h1>
  <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; background:#AB2330; color:#fff width:100vw; height:100vh;">
  <img style="width:600px; height:300px; color:#fff" src="../assets/images/koenigs.png" alt="Photo of CC850">
  <div style="display:flex;flex-direction:column; justify-content:center; align-items:center">
  <h style="color:#fff; font-size:1.4rem; margin:15px">${carData.carName}</h>
  <div style="color:#fff ; text-align:center">
  <p>Model: ${carData.model}</p>
  <p>Car-type: ${carData.type}</p>
  <p> Year of intro: ${carData.year}</p>
  <p> Price: ${carData.price}</p>
  
  </div>
  <div style="color:#fff ;text-align:center">
  <p> Seats: ${carData.seat}</p>
  <p> Run on:  :${carData.fuel}</p>
  <p> Higest-speed :${carData.speed}</p>
  <p> Country of origin: ${carData.country}</p>
  </div>
  </div>
  </div>
  `;



export default carPageUI

