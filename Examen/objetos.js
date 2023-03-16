/*

En este desafío vas a recibir un objeto car como parámetro de la función solution.

Este objeto puede contener diferentes propiedades. 
Debes asegurarte de que tenga la propiedad licensePlate 
(la placa del auto). Si sí la tiene, devuelve el objeto 
original con la propiedad drivingLicense como true. Si no 
la tiene, devuelve el objeto original con la propiedad 
drivingLicense como false.

*/

function solution(car) {
  
    car.drivingLicense = Boolean(car.licensePlate);
  
    return car;
  }
  

  //------------------------------------------------------------//