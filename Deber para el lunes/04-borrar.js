async;
function eliminar(lore) {
    console.log('Escriba la edad del personaje que quiere eliminar');
    console.log(lore);
    var edadNueva = await, prompts = ({
        type: 'number',
        name: 'Edad',
        message: 'Coloque la edad del personaje que hay que eliminar',
        validate: function (value) { return typeof value != "number" ? 'solo numeros' : true; }
    });
    var indice = lore.findIndex(function (matrizPersonajes) {
        return matrizPersonajes.Edad == edadNueva.Edad;
    });
    lore.splice(indice, 1);
    console.log('El nuevo personaje es:');
    console.log(lore);
    return lore;
}
