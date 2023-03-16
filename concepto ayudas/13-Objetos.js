// crear objeto

var persona = {
nombre: "Jose",
id: 1290381,
edad: 15,
caracteristicas: function(){
    console.log(`es ${this.id} y el ${this.name}`)
    }
};

// acceder a algo especifico
persona.nombre //---> imprime el valor

//-----------------------------------

// acceder al medetodo de un objeto
persona.caracteristicas();

//----------------------------------------

//función constructora

function ato(marca, modelo, a){
this.marca = marca;
this.modelo = modelo;
this.a = a;
}
/*
------------------------------------------
generar una instancia u objeto
*/
var autoNew = new ato("monst","model2",1789);

var auoNew2 = new ato("most","modelz", 1998);


//---------------------------
