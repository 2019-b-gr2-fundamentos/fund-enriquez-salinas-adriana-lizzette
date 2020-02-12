import { leerArchivo } from "./leerArchivo";
import { escribirArchivo } from "./escribirArchivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
async function main(){

    let contador = 1;

    //OPERADORES
    let minimoId= -1
    arregloCargadoDeArchivo.forEach(function(valorActual) {
        const idActual = valorActual.id;
        if(idActual > minimoId){
            minimoId = idActual
        }
    });
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );

    //parsear -> texto -> estructura en memoria 
    /*
    {
        "nombre":"Adrian"
    }
    */
    
    let arregloCargadoDeArchivo;
    try{
        arregloCargadoDeArchivo= JSON.parse(contenidoArchivo);
    }catch(error){
        arregloCargadoDeArchivo= [];
        console.error('Error parseando archivo');
    }
    try{
        console.log("1");
        console.log("2");
        console.log("3");
        throw new Error("EL ARCHIVO ESTA MAL PARSEADO");
        console.log("4");
        console.log("5");
    
    }catch(error){
        console.log(:3)
    }
    
    console.log('contenidoArchivo', contenidoArchivo);
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    
    console.log('Cual usuario quieres Editar?');
    console.log(arregloEstudiantes);

    // OPERADORES!!! -> REEMPLAZAR AL !FOR!

    const idABuscar = await prompts({
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION ->
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } // Si encuentra nos devuelve el indice
          // No encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloEstudiantes
            .find( // return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
    console.log(estudianteEncontrado);

    const arregloTexto = JSON.stringify(arregloEstudiantes);

    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
    );
    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */
}

main().then().catch();