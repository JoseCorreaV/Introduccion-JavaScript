/* Como crear un array

var frutas = ["manz","banano","mandarina"];
----------------------------------------

console.log(frutas); --> imprime la cantidad y el contenido

console.log(frutas.length); --> imprime la cantidad de elementos

console.log(frutas[0]); ---> ingresa e imprime al primer elemento del array.

--------------------------
agregar-Final ( nombarray.push("cont"); )
Eliminar ( nombarray.pop("cont"); )
agregar-Inicio ( nombarray.unshift("cont"); )
eliminar-Inicio ( nombarray.shift("cont"); )
conocer-position ( indexOf("manz"); )



var masfrutas = frutas.push("Uvas"); --> agrega un elemento al array y lo posiciona de ultimo

var eliminarfrutas = frutas.pop("Uvas"); ---> elimina un elemento especifico del array

var nuevalongitud = frutas.unshift("hi"); --> agrega un elemento al array y lo posiciona de primero.

var borrarprimero = frutas.shift("hi");    ---> elimina el primer elemento de un array siempre y cuando exista

var positionsd = frutas.indexOf("manz"); --> conocer la ubicación del elemento 


-----------------------------------------------

Son los elementos principales de un 
array:  --> Índice y elemento.

Un array se mantiene inmutable, es 
decir, no puede aumentar o disminuir su 
tamaño. Esta afirmación es: --> Falsa.


Los arrays pueden contener más arrays, 
esto es: --> Verdadero.

------------------------------------------------
//crear un array de objetos

var articulos = [
    { nom:"A1", precio: 564654 },
    { nom:"A2", precio: 524},
    { nom:"A3", precio: 52}
];


--------------------------------------------

Metodos
filtrar los articulos que tengan un precio
mayor o igual que 10 y los almacena en una variable
filter 

var filtrar = articulos.filter(function(articulo){
    return articulo.precio >= 10
});


// llamar

filtrar

-------------------------------------------------------
llama a un atributo especifico de un objeto,
en este caso es el nombre del articulo 

var mapa = articulos.map(function(articulo){
    return articulo.nombre <= 10
});

-------------------------------------------------------



push() --> agregar 1 o mas elementos al final de un
array.

let numArray = [1,2,3,4,5]

function newNum(){
    // agrego 2 elementos
numArray.push(6,7)
// verifico el array
console.log(numArray);
}

newNum() --> (7) [1,2,3,4,5,6,7]

Nota: funciona de igual para un String

------------------------------------------------

.shift() --> eliminar el primer elemento de un array


let numArray = [1,2,3,4,5]

let eliFirst = array.shift(); 
console.log(numArray); --> (4) [2,3,4,5]

---------------------------------------------------

.shift() --> eliminar el ultimo elemento de un array


let numArray = [1,2,3,4,5]

let eliBack = array.pop(); 
console.log(numArray); --> (4) [1,2,3,4]



---------------------------------------------



var articulos = [
    { nom:"A1", precio: 564654 },
    { nom:"A2", precio: 524},
    { nom:"A3", precio: 52}
];

----------------------------------------

find(); ---> Retorna solo la primera coincidencia.
Filter();  --->  Retorna todas las coincidencias.

var findArticulo = articulos.find(
    function(art){
        return art.nombre === "A2"

}); ---> { nom:"A2", precio: 524}




-----------------------------------------
forEach() --> trae todos los nomnbres de 
los objetos.

articulos.forEach(function(a){
    console.log(a.nombre);

}); --->  A1, A2, A3


------------------------------------------
some() ---> v o f si el objeto cumple con la
validación.


var ArticuloCheap = articulos.some(
    function(art){
        return art.costo <= 52;

}); ---> true

*/