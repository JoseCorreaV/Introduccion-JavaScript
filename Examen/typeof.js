/* En este desafío encontrarás una función llamada 
solution que recibe un parámetro llamado valor. 
Debes encontrar el tipo de dato del parámetro valor 
y retornarlo desde la función solution.
Recuerda que el parámetro valor será distinto 
por cada distinta forma en que ejecutemos la 
función solution. */

 /* OBTENER EL TIPO DE ELEMENTO typeof */

function solution(variable){
    return typeof(variable);
}

  solution(1); // return --> number
  solution("hi"); // return --> string
  solution(true); // return -->  boolean