import { matrizPersonajes} from "./interfaces/interfacePersonajes";
import * as prompts from 'prompts'
import { actualizar } from "./03-actualizar";
import { eliminar } from "./04-borrar";
import { buscarArray } from "./05-buscar";

export async function menuuuuu (matriz:matrizPersonajes[]){
    const preguntas = {
        type: 'select',
        name: 'menu',
        message: 'Que quieres hacer',
        choices: [
          { title: 'Actualizar', description: 'Actualaizar los datos de un personaje', value: 0 },
          { title: 'Eliminar', description: 'Eliminar un personaje de la comunidad', value: 1 },
          { title: 'Buscar', description: 'Buscar al personaje por su edad', value: 2 },
          { title: 'crear', description: 'Invitar a un personaje nuevo a la comunidad', value: 3 },
          { title: 'Salir', description: 'Dejar la comunidad tal como ha sido creada', value: 4 },
          { title: 'Imprimir', description: 'Imprimir los registros de la comunidad', value: 5 }
          
        ],
        initial: 1
      }
    const hi =await prompts(preguntas);
    if(hi.menu==0){
        const matrizactualizada = await actualizar(matriz);
        menuuuuu(matrizactualizada);
    }else if(hi.menu==1){
        const matrizNueva = await eliminar(matriz);
        menuuuuu(matrizNueva);
    }else if(hi.menu==2){
        const elemnto = await buscarArray(matriz);
        menuuuuu(matriz)
    }else if(hi.menu==3){
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
        const nuevoPJ = await prompts(escribePJ)
        matriz.push(nuevoPJ);
        menuuuuu(matriz);
    }else if(hi.menu==5){
        console.log(matriz);
        menuuuuu(matriz);
    }

}