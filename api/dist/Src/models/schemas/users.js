"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/*
    Creación del schema
*/
const schema = new mongoose_1.Schema({
    userName: { type: String, required: true, validate: {
            validator: (value) => {
                const re = /^[^{}<>#$%&~^`/*+¿?¡!@]*$/g;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    mail: { type: String, required: true, validate: {
            validator: function (value) {
                const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    feedback: { type: String, required: false }
});
exports.default = schema;
