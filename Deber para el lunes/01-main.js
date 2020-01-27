var menu_1 = require("./menu");
async;
function main() {
    var menuPJ = await, prompts = ({
        type: 'number',
        name: 'numeroPJ',
        message: 'cuantos personajes vas a tener?'
    });
    var matrizPJ = await, crearPJ = (menuPJ.numeroPJ);
    console.log('esta es la matriz');
    console.log(matrizPJ);
    menu_1.menuuuuu(matrizPJ);
}
main().then().catch();
