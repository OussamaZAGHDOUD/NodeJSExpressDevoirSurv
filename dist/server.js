"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.use(serve_static_1.default("public"));
        app.get("/", (req, resp) => {
            resp.send("hello Express ");
        });
        app.listen(this.port, () => console.log("Server started"));
    }
}
exports.default = Server;
