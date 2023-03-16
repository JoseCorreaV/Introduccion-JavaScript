/* push() --> agregar 1 o mas elementos al final de un array.*/
let numArray = [1,2,3,4,5];
function newNum(){
    // agrego 2 elementos
numArray.push(6,7);
// verifico el array
console.log(numArray);
}
newNum() // --> (7) [1,2,3,4,5,6,7]
/* Nota: funciona de igual para un String
------------------------------------------------
*/
.shift() // --> eliminar el primer elemento de un array
let numeArray = [1,2,3,4,5];
let eliFirst = array.shift(); 
console.log(numeArray);  //--> (4) [2,3,4,5]
// ---------------------------------------------------
// .shift() --> // eliminar el ultimo elemento de un array
let nkArray = [1,2,3,4,5];

let eliBack = array.pop(); 
console.log(nkArray); // --> (4) [1,2,3,4]