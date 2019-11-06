//EJEMPLOS DE IF
//1
const numA:number= 12; 
if (numB % 2==0) { 
   console.log("Par"); 
} else {
   console.log("Impar"); 
}
//2
var numB =(100);
if (numB>100){
    alert("El valor de la variable es mayor que 100");
} else if (numB==100){
    alert("El valor de la variable es exactamente 100");
} else {
    alert("El valor de la variable es menor que 100");
}
//3 
var edad = 18;
if (edad >= 18) {
   alert("Eres mayor de edad");
}
else {
   alert("Eres menor de edad");
}

//EJEMPLOS DE SWITCH

//1
var nombrePersonaje= "Maria";
switch (nombrePersonaje){
    case('Harry Mason'):
        alert('El protagonista del primer «Silent Hill»');
        break;
    case('James Sunderland'):
        alert('El protagonista de «Silent Hill 2»');
        break;
    case('Maria'):
        alert('Protagonista de «Silent Hill 2: Born from a Wish»');
        break;
    case('Heather Mason'):
        alert('Protagonista de «Silent Hill 3», hija de Harry Mason');
        break;
    case('Henry Townshend'):
        alert('Protagonista de «Silent Hill 4: The Room»');
        break;
    case('Travis Grady'):
        alert('Protagonista de «Silent Hill Origins»');
        break;
    default:
        alert('El nombre no corresponde a ningún protagonista de «Silent Hill»');
        break;
}        
 
//2
if (edad > 6 && edad < 12) alert("Eres un niño");
else if (edad >= 12 && edad < 18) alert("Eres un adolescente");
else if (edad >= 18 && edad < 31) alert("Eres un joven");
else if (edad >= 31 && edad < 60) alert("Eres un adulto");
else if (edad >= 60) alert ("Eres un adulto mayor");
else alert ("Tu debes de ser un bebé no mayor de 6 años");

//3
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Mal sumado' );
    break;
  case 4:
    alert( 'Justo' );
    break;
  case 5:
    alert( 'Sumaste mucho' );
    break;
  default:
    alert( "Vuelve a primer grado" );
}
