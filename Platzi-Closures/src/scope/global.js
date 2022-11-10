//Variables

var a; // => Declarar una variable
var b = b; // => Declaramos y asignamos un valor a la variable
b = 'bb' // => Reasignamos un valor a la variable
var a = 'aa' // => Redeclaramos la variable 

//Global Scope
var fruit = 'Apple'; //Global

function bestFruit(){
    console.log(fruit)
}

bestFruit();

function countries(){
    country = 'Argentina';
    console.log(country);
}

countries();
console.log(country)