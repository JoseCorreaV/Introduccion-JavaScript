/* 

En este desafío vas a recibir un parámetro
 arraySecreto en la función solution. Debes
  retornar true si el primer elemento del
   arraySecreto es de tipo string y debes 
   retornar false si es de cualquier otro tipo.

*/

export function solution(arraySecreto=[]) {
    var primer_elemento = arraySecreto[0];
    var es_string = typeof "esto es un string";
    return typeof primer_elemento == es_string;
  }



// otra opción

export function solution(arraySecreto) {
  return typeof arraySecreto[0] == "string";
}
