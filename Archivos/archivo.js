var leerArchivo_1 = require("./leerArchivo");
var escribirArchivo_1 = require("./escribirArchivo");
function main() {
    var textoLeido = leerArchivo_1.leerArchivo("ejemplo.txt");
    var nuevoContenido = "Tengo Hambre :( \n";
    escribirArchivo_1.escribirArchivo("./ejemplo.txt", "");
    console.log(textoLeido + nuevoContenido);
}
main();
