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
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProject = exports.deleteProject = exports.postProject = exports.getProjects = void 0;
const models_1 = require("../../models/models");
/*
    Función para optener todos los proyectos
*/
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let project = yield models_1.ProjectModel.find();
        return project;
    }
    catch (err) {
        throw Error(err);
    }
});
exports.getProjects = getProjects;
/*
    Función para crear un proyecto
*/
const postProject = (title, description, img, colaborations) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.ProjectModel.create({ title, description, img, colaborations });
        return { title, description, img, colaborations };
    }
    catch (err) {
        throw Error(err);
    }
});
exports.postProject = postProject;
/*
    Función para borrar muchos proyectos
*/
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.ProjectModel.deleteOne({ _id: id });
        return 'Deleted';
    }
    catch (err) {
        throw Error(err);
    }
});
exports.deleteProject = deleteProject;
/*
    Funcion para poder cambiar un proyecto
*/
const putProject = (id, title, description, img, colaborations) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let project = yield models_1.ProjectModel.findByIdAndUpdate(id, { title, description, img, colaborations });
        return project;
    }
    catch (err) {
        throw Error(err);
    }
});
exports.putProject = putProject;
module.exports = {
    getProjects: exports.getProjects,
    postProject: exports.postProject,
    deleteProject: exports.deleteProject,
    putProject: exports.putProject
};
