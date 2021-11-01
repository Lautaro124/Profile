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
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const get_1 = __importDefault(require("./routes/projects/get"));
const post_1 = __importDefault(require("./routes/projects/post"));
dotenv_1.default.config();
const conect = () => __awaiter(void 0, void 0, void 0, function* () {
    /*
        Guardar la url en una varliable
    */
    const url = process.env.URL;
    /*
        Funcion para conectarse a la base de datos
    */
    yield (0, mongoose_1.connect)(`${url}`);
});
function App(port) {
    /*
        Creacion de aplicaicon
    */
    const app = (0, express_1.default)();
    /*
        Callback para conectarse a la base de datos
    */
    conect().then(() => console.log('Conected to data base')).catch((err) => console.log(err));
    /*
        Seteo de puerto
    */
    app.set('port', port || 3001);
    /*
        Midelwers
    */
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cors_1.default)());
    /*
        Creacion de Res Api
    */
    app.use('/Project', get_1.default);
    app.use('/Project', post_1.default);
    /*
         Llamada al puerto
    */
    app.listen(app.get('port'), () => console.log('Port listenign'));
}
exports.default = App;
