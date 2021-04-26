"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./db');
const express_1 = __importDefault(require("express"));
const comic_model_1 = __importDefault(require("./model/comic.model"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
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
app.get("/comics/:id", (req, resp) => {
    comic_model_1.default.findById(req.params.id, (err, comic) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(comic);
    });
});
app.post("/comics", (req, resp) => {
    let comic = new comic_model_1.default(req.body);
    comic.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(comic);
    });
});
app.put("/comics/:id", (req, resp) => {
    comic_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err, comic) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(comic);
    });
});
app.delete('/comics/:id', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.id;
    try {
        const comic = yield comic_model_1.default.findByIdAndDelete(_id);
        if (!comic)
            return resp.status(404).send("Comic with this id is not found !");
        return resp.send(comic);
    }
    catch (e) {
        return resp.status(200).send("Comic deleted succeslully");
    }
}));
// GET http://localhost:8888/pcomics?page=1?&size=2
app.get("/pcomics", (req, resp) => {
    let page = req.query.page;
    let size = req.query.size;
    let p = parseInt(page || '1');
    let s = parseInt(size || '5');
    console.log(p);
    console.log(s);
    comic_model_1.default.paginate({}, { page: p, limit: s }, (err, books) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(books);
    });
});
// GET http://localhost:8888/comics-search?kw=page=1&size=2
app.get("/comics-search", (req, resp) => {
    let page = req.query.page;
    let size = req.query.size;
    let kw = req.query.kw;
    let p = parseInt(page || '1');
    let s = parseInt(size || '5');
    let k = kw || '5';
    comic_model_1.default.paginate({ title: { $regex: ".*(?i)" + kw + ".*" } }, { page: p, limit: s }, (err, books) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(books);
    });
});
app.listen(8888, () => {
    console.log("Server started !");
});
