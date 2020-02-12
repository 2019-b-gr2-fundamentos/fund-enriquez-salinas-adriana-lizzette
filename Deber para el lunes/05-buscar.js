async;
function buscarArray(lore) {
    var menuFinalFinal = {
        type: 'select',
        name: 'value',
        message: 'Bajo que parametro quiere buscar al personaje?',
        choices: [
            { title: 'Edad', description: 'Buscar por Edad', value: '0' },
            { title: 'Nombre', description: 'buscar por nombre', value: '1' }
        ],
        initial: 0
    };
    var menuMenu = await, prompts = (menuFinalFinal);
    if (menuMenu.value == 0) {
        var edadRequerida = await, prompts_1 = ({
            type: 'number',
            name: 'Edad',
            message: 'Escriba la edad del personaje que quiere buscar',
            validate: function (value) { return typeof value != "number" ? 'solo numeros' : true; }
        });
        var indice = lore.findIndex(function (matrizPersonajes) {
            return matrizPersonajes.Edad == edadRequerida.Edad;
        });
        console.log('El personaje que buscabas es:');
        console.log(lore[indice]);
    }
    else if (menuMenu.value == 1) {
        var pjBuscado = await, prompts_2 = ({
            type: 'text',
            name: 'pjX',
            message: 'escribe el nombre del personaje que quieres buscar'
        });
        var pjConocido = lore.find(function (lore) {
            return lore.Nombre == pjBuscado.pjX;
        });
        console.log('El personaje que buscas es: ');
        console.log(pjConocido);
    }
}
