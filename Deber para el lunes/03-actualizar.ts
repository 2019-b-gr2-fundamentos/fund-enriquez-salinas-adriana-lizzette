import { matrizPersonajes } from "./interfaces/interfacePersonajes";
import * as prompts from "prompts";
import { crearPJ } from "./02-crear";


export async function actualizar(lore:matrizPersonajes[]){
    console.log('Selecciona la edad');
    console.log(lore);
    const edadNueva = await prompts({
            type:'number',
            name:'Edad',
            message:'Coloque la edad del personaje',
            validate:value => typeof value != "number"?'solo numeros':true
    })

    const indice = lore.findIndex(  // Este me devuelve el indice del arreglo que cumple la condicion del return
        function (matrizPersonajes){
            return matrizPersonajes.Edad == edadNueva.Edad
        }
    )
    console.log('a cpntinuacion se actualiza el personaje ')
    const nuevoPJ = await crearPJ(1);
    lore[indice]=nuevoPJ[0];
    console.log('Este es el nuevo personaje')
    console.log(lore);
    
    return lore;
}

















