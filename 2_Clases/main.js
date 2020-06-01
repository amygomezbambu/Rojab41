// var platillo = {
//     nombre : "hamburguesa",
//     ingredientes: ["carne", "queso", "aderezos", "mostaza"],
//     tamanio : "grande",
//     conTocino: true

// }

//console.log(platillo);

class planta {
    constructor(familia, color, rareza) {
        this.familia = familia;
        this.color = color;
        this.rareza = rareza;

    }
    plantar() {

        return "La planta " + this.familia + " debe sembrarse pronto" + " para que tenga un buen color " + this.color;
    }
    trasplantar(nuevarareza) {
        this.rareza = nuevarareza
        return "Se ha cambiado la rareza por su escacez"
    }

    metamorfosis(nuevocolor) {
        this.color = nuevocolor
        return "Cambio el color con el frio"

    }

    Historial() {

        if (this.rareza == "ultra rara") {
            return "Ahora es mas rara"
        }
        else {
            return "Su rareza no ha cambiado"
        }
    }
}

// //Instanca de clase
var miPlanta = new planta("Suculenta", "Rosa azulado", "Comun");
var plantaDos = new planta("Suculenta", "Verde Ocre", "Rara");
console.log(miPlanta);
console.log(plantaDos);


// (instancia .metodo())
// Si quieres puedes mandar llamar la instancia y concatenar con la palabra
//reservada //this para apuntar al color indicado//

//llamar a un metodo dentro de un objeto 
// (instancia .metodo())
console.log(miPlanta.plantar());
console.log(miPlanta.trasplantar("comun"));
console.log(miPlanta);
console.log(miPlanta.metamorfosis("Morada"));
console.log(miPlanta);
console.log(miPlanta.Historial());

/*/ ejercicio grupal/*/
// hacer una clase persona
// atributos: nombre, edad, genero, peso, altura
//calcularIMC ()
//esMayorDeEdad ()
//El constuctor debe pedir nombre, edad, sexo, peso y altura
//enerar el RFC a partir del nombre edad y sexo.




// hacer una clase cuenta
// Titular y cantidad
// ingresar (cantidad)
// retirar (cantidad)
//Hacer validaciones previas 
//Como regla no debe tener mas de 900 y menos de 10


