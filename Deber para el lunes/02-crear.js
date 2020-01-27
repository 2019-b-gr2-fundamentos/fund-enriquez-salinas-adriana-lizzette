async;
function crearPJ(numeroPJ) {
    var matrizCero = [];
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
    for (var i = 0; i < numeroPJ; i++) {
        var prueba = await, prompts_1 = (escribePJ);
        matrizCero.push(prueba);
    }
    return matrizCero;
}
;
