import { matrizPersonajes } from "./interfaces/interfacePersonajes";
import * as prompts from "prompts";

export async function eliminar(lore:matrizPersonajes[]){
    console.log('Escriba la edad del personaje que quiere eliminar');
    console.log(lore);
    const edadNueva = await prompts({
        type:'number',
        name:'Edad',
        message:'Coloque la edad del personaje que hay que eliminar',
        validate:value => typeof value != "number"?'solo numeros':true
            })

        const indice = lore.findIndex(  // Este me devuelve el indice del arreglo que cumple la condicion del return
               function (matrizPersonajes){
              return matrizPersonajes.Edad == edadNueva.Edad
    })
    lore.splice(indice,1);
    console.log('El nuevo personaje es:')
    console.log(lore);
    return lore;
}

