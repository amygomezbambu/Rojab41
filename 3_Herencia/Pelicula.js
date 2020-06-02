var {Largometraje} =require ("./Largometraje");

class Pelicula extends Largometraje {
    constructor (titulo, duracion, genero, director){
        super (titulo,duracion);
        this.genero = genero
        this.director = director;
        this.entrada = "$5"
    }
}

var pelicula1 = new Pelicula ("episodio I star wars", "1:20 min", "Ciencia Ficcion", "George Lucas")
var pelicula2 = new Pelicula ("hombre al agua", "120 min " ,"Comedia", "Eugenio Derbez");

console.log (pelicula1);

module.exports = {pelicula1, pelicula2}

