"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/*
    Creación del schema
*/
const schema = new mongoose_1.Schema({
    username: { type: String, required: true, validate: {
            validator: (value) => {
                const re = /^[^{}<>#$%&~^`/*+¿?¡!@]*$/g;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    firstName: { type: String, required: true, validate: {
            validator: (value) => {
                const re = /[^A-Za-z]/g;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    lastName: { type: String, required: true, validate: {
            validator: (value) => {
                const re = /[^A-Za-z]/g;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    age: { type: Number, required: true },
    recluter: { type: Boolean, required: true },
    mail: { type: String, required: true, validate: {
            validator: function (value) {
                const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    feedback: { type: String, required: false },
    password: { type: String, required: true }
});
exports.default = schema;
