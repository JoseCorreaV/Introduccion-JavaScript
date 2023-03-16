

var a = ["Name 1","name 2","name 3"];

function saludarName (asf){
console.log(`HOLA ${ asf}`); // alt+96 simbolo
}


// el ciclo se repetirar la cantidad de a.length
for(var i = 0; i < a.length; i++){ // el i++ aumenta cuando entra al for
 saludarName(a[i]);
}

/*
-----------------------------------
otra forma
*/
for(var asf of a ){ 
 saludarName(asf);
}