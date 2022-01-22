"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// more code will go in here just befor the listening function
app.listen(8000, function () {
    console.log("Listening on port 8000!");
});
