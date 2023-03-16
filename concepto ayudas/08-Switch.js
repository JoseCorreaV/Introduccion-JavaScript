/*
Se utiliza para cuando hay muchos casos que evaluar y evitar multiples if - else

------------------------
Sintaxis para numeros*/
function s (a){
var caso = a; 


switch(caso){
    case 1:
     console.log("hola");
     break; // salir del Switch si se cumple
    case 10:
      console.log("this");
     break;
    case 100:
     console.log("aqui ese es");
     break;
    default:
     console.log("pasa aca no cumple todos los casos");

}

}
/*
--------------------------
¿Para qué nos sirve el operador ternario "?"

Para definir una condición. resulado de cuando 
se cumple y cuando no se cumple. en una sola linea.
--------------------------------


return es una declaración que se utiliza para devolver un valor 
específico desde una función. Cuando se ejecuta una función y se 
encuentra una declaración return, la función devuelve el valor 
especificado y se detiene en ese punto. La declaración return se 
utiliza para enviar un valor desde una función a la parte del 
programa que la llamó.

Por otro lado, console.log es una función que se utiliza para 
imprimir un mensaje en la consola del navegador o en la consola 
del editor de código. Esta función se utiliza principalmente para
depurar y encontrar errores en el código. La función console.log
no devuelve ningún valor y su único propósito es mostrar un mensaje 
en la consola.                                                                                                                                                                                                                                                                                                                                                                                                                                             
------------------------

Sintaxis para string*/

function k(a){
var expr = a;
switch (expr) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

console.log("¿Hay algo más que te quisiera consultar?");
}

