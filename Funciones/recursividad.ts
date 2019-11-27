function imprimirMensajeNVeces(
    mensaje: string,
    numeroVeces: number
): void{
    if(numeroVeces == 0){
        console.log("se termino");
    }else{
        console.log(mensaje)
        const nuevoNumeroVeces = numeroVeces-1
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces)
    }
}

function main(){
    imprimirMensajeNVeces("hola", 5);
}