async;
function actualizar(lore) {
    console.log('Selecciona la edad');
    console.log(lore);
    var edadNueva = await, prompts = ({
        type: 'number',
        name: 'Edad',
        message: 'Coloque la edad del personaje',
        validate: function (value) { return typeof value != "number" ? 'solo numeros' : true; }
    });
    var indice = lore.findIndex(function (matrizPersonajes) {
        return matrizPersonajes.Edad == edadNueva.Edad;
    });
    console.log('a cpntinuacion se actualiza el personaje ');
    var nuevoPJ = await, crearPJ = (1);
    lore[indice] = nuevoPJ[0];
    console.log('Este es el nuevo personaje');
    console.log(lore);
    return lore;
}
