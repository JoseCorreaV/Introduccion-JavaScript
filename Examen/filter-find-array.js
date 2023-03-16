/*
En este desafío debes ayudarnos a 
arreglar la función solution.

Esta recibe un array cars y debería
 retornar el array filtrado únicamente 
 con los objetos que tengan la propiedad 
 licensePlate.

Pero no está funcionando.

La función solo devuelve un objeto con el 
primer elemento que cumple los requisitos, 
no estamos recibiendo los demás elementos 
del array que también deberían pasar el filtro.

¿Nos ayudas? ¿Cómo solucionarías el error?

*/

function solution(cars) {
    // 👇 Este es el código que no funciona
    // por que tenia find
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }
  