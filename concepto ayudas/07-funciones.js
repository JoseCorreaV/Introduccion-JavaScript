// declarativa
function sume(a,b){
    return a+b ;
}
sume(1,2);
//--------------------------------------
// Expresión
var nombre = function(a,n){
    return a+n;
}
nombre();
//------------------------------------
// imprimir en consola
console.log();

//-----------------------------------
/* plantilla de cadena de texto --> simbolo alt 96 -> en el console "nombre"
 va la sintaxis de bd para traer todos los nombres de una base de datos */
var nombre = function(nombre){
    console.log(`hola ${nombre}`);
}
nombre(nombre);
