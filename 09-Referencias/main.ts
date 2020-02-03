//Referencias
function main(){
    let uno = 1;
    let dos = uno;
    let tres = dos;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    uno= 5;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);

    let arreglito=[1,2,3];
    let miOtroArreglito = [];
    let a=arreglito[0]; //valor
    let b=arreglito[1]; //valor
    console.log('arreglito',arreglito);
    console.log('a',a);
    console.log('b',b);
    miOtroArreglito = [...arreglito];
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
    console.log('arreglito',arreglito);
    console.log('miOtroArreglito',miOtroArreglito);
    console.log('a',a);
    console.log('b',b);


    const adrian = {
        id: 1 ,
        nombre : 'Adrian',
        sueldo: 1.12
    };

    const soloElNombre = {...adrian};
    console.log('adrian',adrian);
    console.log('soloElNombre',soloElNombre)
    delete adrian.nombre; ///Eliminar el nombre del objeto
    soloElNombre['edad']= 22;
    //soloElNombre.edad =22;
    console.log('adrian',adrian);
    console.log('soloElNombre',soloElNombre)



}
main();