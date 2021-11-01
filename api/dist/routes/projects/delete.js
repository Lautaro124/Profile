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
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const app = (0, express_1.default)();
/*
    Ruta para eliminar un proyecto
*/
app.delete('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.body;
        const data = yield (0, functions_1.deleteProject)(_id);
        res.send(data);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = app;
