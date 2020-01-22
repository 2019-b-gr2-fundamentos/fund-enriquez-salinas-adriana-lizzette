var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync(path, contenido, "utf-8");
}
exports.escribirArchivo = escribirArchivo;
