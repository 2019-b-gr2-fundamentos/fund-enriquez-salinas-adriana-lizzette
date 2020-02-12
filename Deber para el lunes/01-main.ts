import { matrizPersonajes } from "./interfaces/interfacePersonajes";
import * as prompts from 'prompts';
import {crearPJ}  from "./02-crear";
import { eliminar } from "./04-borrar";
import { actualizar } from "./03-actualizar";
import { buscarArray } from "./05-buscar";
import { menuuuuu } from "./menu";


async function main (){
    const menuPJ = await prompts({
            type : 'number',
            name : 'numeroPJ',
            message : 'cuantos personajes vas a tener?',
        })   
    const matrizPJ = await crearPJ(menuPJ.numeroPJ);
    console.log('esta es la matriz')
    console.log(matrizPJ);
    menuuuuu(matrizPJ);

}

main().then().catch();