"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, //path
    "utf-8" //codificacion
    );
    return (resultado);
}
exports.leerArchivo = leerArchivo;
