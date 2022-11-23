"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const car_1 = __importDefault(require("./files/car"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send(car_1.default);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    if (process.env.NODE_ENV === 'production') {
        console.log('Production');
    }
    else {
        console.log('Develop');
    }
});
//# sourceMappingURL=app.js.map