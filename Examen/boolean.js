/* 
En este desafío vas a recibir un parámetro secreto en la función solution. 
Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual. 
*/

//tipo if

function solution(a) {
    // retornar true si  "a" es > 5
    // false si a <= 5
    var r;
    if (r = a > 5) {
      return Boolean(r);
    }
  
    return (false);
  
  }

  // sin if

  function solution(a) {
      return Boolean(a>5);
  }


  //

  function solution(a) {
    return !(a<=5);
}