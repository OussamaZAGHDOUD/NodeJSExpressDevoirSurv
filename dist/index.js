"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./db');
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, resp) => {
    resp.send("hello world");
});
app.get("/comics", (req, resp) => {
});
app.listen(8888, () => {
    console.log("Server started !");
});
