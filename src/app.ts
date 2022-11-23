import express from "express";
import dotenv from "dotenv";
import carPageUI from "./files/car"

dotenv.config();
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(carPageUI);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  if(process.env.NODE_ENV === 'production') {
    console.log('Production')
  }else{
    console.log('Develop')
  }
});
