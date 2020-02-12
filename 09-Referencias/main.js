var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Referencias
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0]; //valor
    var b = arreglito[1]; //valor
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglito = __spreadArrays(arreglito);
    //SE PUEDE COPIAR VARIOS ARREGLOS SI SE DESEA
    //ref -> direccion memoria 
    //asignar a mi otro arreglito una nueva direccion de memoria
    //1. for llenamos un nuevo arreglo
    //2. filter : siempre true, nuevo arreglo 
    //3. Map . nuevo arreglo 
    //INMUTABILIDAD
    //CLON DE ARREGLO -> CLON TRABAJAR 
    miOtroArreglito.push(2);
    arreglito[0] = 9;
    arreglito[1] = 10;
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, adrian);
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    delete adrian.nombre; ///Eliminar el nombre del objeto
    soloElNombre['edad'] = 22;
    //soloElNombre.edad =22;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
}
main();
