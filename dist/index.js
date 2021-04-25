"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./db');
const express_1 = __importDefault(require("express"));
const comic_model_1 = __importDefault(require("./model/comic.model"));
const app = express_1.default();
app.get("/", (req, resp) => {
    resp.send("hello world");
});
app.get("/comics", (req, resp) => {
    comic_model_1.default.find((err, comics) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(comics);
    });
});
app.listen(8888, () => {
    console.log("Server started !");
});
