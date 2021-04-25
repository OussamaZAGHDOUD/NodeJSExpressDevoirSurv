"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let comicSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String }
    // publishingDate:{type:Date, required:true, default:new Date()},
    // available:{type:Boolean, required:true,default: true},
});
comicSchema.plugin(mongoose_paginate_1.default);
const Comic = mongoose_1.default.model("Comic", comicSchema);
exports.default = Comic;
