//boolean
//number
//string
//...
//Struct-> Estructura de datos
//Clase -> Estructua de datos -> métodos

const poliPerro= {
    nombreCientifico : "canis lupus familiaris",
    nombre: "Grandote",
    clan: "poliperro",
    edad: 10,
    hijos: null,
    perritas: ["Manuela","Zoraida"],
    vacunado: true,
}
console.log(poliPerro.nombre);

//Estructura de lenguaje en tipado

interface AnimalPerrito {
    nombreCientifico : string;
    nombre: string;
    clan: string;
    edad?: number;
    //hijos: ;
    perritas?: string[];
    vacunado?: boolean;
}

const poliPerroAmarillo: AnimalPerrito = {
    nombreCientifico : "canis lupus familiaris",
    nombre: "Grandote",
    clan: "poliperro",
    //edad: 10,
    //hijos: null,
    //perritas: ["Manuela","Zoraida"],
    //vacunado: true,
}