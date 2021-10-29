"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const users_1 = __importDefault(require("./schemas/users"));
const projects_1 = __importDefault(require("./schemas/projects"));
/*
    Uso de modelos en mongoDB
*/
exports.ProjectModel = (0, mongoose_1.model)('project', projects_1.default);
exports.UserModel = (0, mongoose_1.model)('user', users_1.default);
