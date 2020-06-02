var { documental1, documental2 } = require("./Documental");
var { pelicula1, pelicula2 } = require("./Pelicula");
class Cine {
    constructor(cadena, butaca, pantallas) {
        this.cadena = cadena;
        this.butaca = butaca;
        this.pantallas = pantallas;
    }

    reproducirLargometraje(largometraje) {
        if (largometraje.entrada == "$3") {
            return "Estas viendo el documental " + largometraje.titulo;

        }
        else {
            return "Estas viendo la pelicula " + largometraje.titulo;
        }
    }
}

var cine1 = new Cine("Cinepolis", 100, 8);
var cine2 = new Cine("Cinemex", 200, 8);


console.log(cine1.reproducirLargometraje(pelicula1));
console.log(cine2.reproducirLargometraje(documental2));



