"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/*
    Creacion del schema usando al base anterior
*/
const schema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    colaborations: { type: String, required: true },
    web: { type: String, required: false },
});
exports.default = schema;
