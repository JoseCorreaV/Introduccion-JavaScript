
var a = ["Name 1","name 2","name 3"];

function saludarName (asf){
console.log(`HOLA ${ asf}`); // alt+96 simbolo
}

//mientras sea verdadero hace hace el ciclo

// este while es infinito pero
// el a.shift(); disminuye el valor del array
//para asi recorrer y finalizar el ciclo


while(a.length > 0 ){
var asf = a.shift();
saludarName(asf);
}