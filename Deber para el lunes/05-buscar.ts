import { matrizPersonajes } from "./interfaces/interfacePersonajes";
import * as prompts from "prompts";

export async function buscarArray (lore:matrizPersonajes[]){
    const menuFinalFinal = {
        type: 'select',
        name: 'value',
        message: 'Bajo que parametro quiere buscar al personaje?',
        choices: [
          { title: 'Edad',description: 'Buscar por Edad', value: '0', },
          { title: 'Nombre', description :'buscar por nombre',value: '1' }
        ],
        initial: 0
      }
    const menuMenu =  await prompts(menuFinalFinal);
    if(menuMenu.value == 0){
        const edadRequerida = await prompts({
        type:'number',
        name:'Edad',
        message:'Escriba la edad del personaje que quiere buscar',
        validate:value => typeof value != "number"?'solo numeros':true
                })
        const indice = lore.findIndex(  // Este me devuelve el indice del arreglo que cumple la condicion del return
                function (matrizPersonajes){
            return matrizPersonajes.Edad == edadRequerida.Edad
        })
        console.log('El personaje que buscabas es:')
        console.log(lore[indice]);
    }else if(menuMenu.value == 1){
        
        const pjBuscado = await prompts({
            type:'text',
            name:'pjX',
            message: 'escribe el nombre del personaje que quieres buscar'
        }) 
        const pjConocido = lore.find(function(lore){
            return lore.Nombre == pjBuscado.pjX;
        })
        console.log('El personaje que buscas es: ')
        console.log(pjConocido);
    }
}



