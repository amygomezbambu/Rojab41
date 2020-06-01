//ECMA 5
var persona = 'Amy';

//ECMA 6
let personalet = 'Amy';
const personaconst = 'amyConst';

//JS es de tipado dinamico.

/* Tipos de datos 

String
number
boolean
*/
/*/ sintaxis*/
const obj = {};
const arry = [];


let isFun = true;
let isRain = false;
/*
if (isRain) {
alert ('Leva Sombrilla');
}
else if (!isRain) {
    alert ('Camina agusto');
}
/* El operador ! es para negar una operacion*/



/* Objeto Literla*/
let perro = {

    nombre: 'ayudante de santa',
    color: 'cafe',
    noPataas: '4',
    tieneDueño: true,
    ladrar(aQuien) {
        if (aQuien) {
            console.log(`wof, wof  ${aQuien}! sal de mi casa!`);
            return 'si ladro';
        }
        console.log('wof,woof, quien eres?');
        return false;
    },
};


/*el return para la accion*/


console.log(perro.noPataas);
console.log(perro.ladrar('julian'));
if (perro.ladrar('gato') === 'si ladro') {
    console.log('Sal de mi casa');
}

