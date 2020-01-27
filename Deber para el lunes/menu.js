async;
function menuuuuu(matriz) {
    var preguntas = {
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
    };
    var hi = await, prompts = (preguntas);
    if (hi.menu == 0) {
        var matrizactualizada = await, actualizar_1 = (matriz);
        menuuuuu(matrizactualizada);
    }
    else if (hi.menu == 1) {
        var matrizNueva = await, eliminar_1 = (matriz);
        menuuuuu(matrizNueva);
    }
    else if (hi.menu == 2) {
        var elemnto = await, buscarArray_1 = (matriz);
        menuuuuu(matriz);
    }
    else if (hi.menu == 3) {
        var escribePJ = [
            {
                type: 'text',
                name: 'Nombre',
                message: 'Escriba el nombre de su personaje (LOTR)'
            }, {
                type: 'text',
                name: 'Raza',
                message: 'Escriba la raza de su personaje (elfo, humano, enano)'
            }, {
                type: 'number',
                name: 'Edad',
                message: 'Escriba el nombre de su personaje',
                validate: function (value) { return typeof value != "number" ? 'solo numeros' : true; }
            }, {
                type: 'text',
                name: 'Ciudad',
                message: 'Escriba el nombre de la ciudad donde vive el personaje'
            }, {
                type: 'text',
                name: 'Oficio',
                message: 'Escriba a que se dedica el personaje'
            }
        ];
        var nuevoPJ = await, prompts_1 = (escribePJ);
        matriz.push(nuevoPJ);
        menuuuuu(matriz);
    }
    else if (hi.menu == 5) {
        console.log(matriz);
        menuuuuu(matriz);
    }
}
