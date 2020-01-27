import * as prompts from 'prompts'
import { matrizPersonajes } from "./interfaces/interfacePersonajes";

export async function crearPJ(numeroPJ : number) {
    let matrizCero: matrizPersonajes[] = [];
    const escribePJ = [
        {
                type:'text',
                name:'Nombre',
                message:'Escriba el nombre de su personaje (LOTR)',
            },{
                type:'text',
                name:'Raza',
                message:'Escriba la raza de su personaje (elfo, humano, enano)'
            },{
                type:'number',
                name:'Edad',
                message:'Escriba el nombre de su personaje',
                validate:value => typeof value != "number"?'solo numeros':true
            },{
                type:'text',
                name:'Ciudad',
                message:'Escriba el nombre de la ciudad donde vive el personaje'
            },{
                type:'text',
                name:'Oficio',
                message:'Escriba a que se dedica el personaje'
            }
        ];
    for (let i = 0; i < numeroPJ; i++) {
        const prueba = await prompts(escribePJ);
        matrizCero.push(prueba);
    }
    
    return matrizCero    

};
