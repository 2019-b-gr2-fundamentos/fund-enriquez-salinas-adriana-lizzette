import {leerArchivo} from "./leerArchivo";
import { escribirArchivo } from "./escribirArchivo";

function main(){
    const textoLeido= leerArchivo("ejemplo.txt");
    const nuevoContenido = "Tengo Hambre :( \n";
    escribirArchivo("./ejemplo.txt", "");
    console.log(textoLeido + nuevoContenido);
}
main();
