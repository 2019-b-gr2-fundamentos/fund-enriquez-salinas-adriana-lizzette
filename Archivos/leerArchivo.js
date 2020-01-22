var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, "utf-8" //codificacion
    );
    return (resultado);
}
exports.leerArchivo = leerArchivo;
