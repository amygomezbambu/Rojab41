var {Largometraje} = require   ("./Largometraje");

class documental extends Largometraje {
    constructor (titulo,duracion,patrocinador, anio){
        super (titulo,duracion);
        this.patrocinador = patrocinador;
        this.anio = anio;
        this.entrada = "$3"
    }
}

var documental1 = new documental ("The last dance", "5:00", "Netflix", "2020");
var documental2 = new documental ("Supersonic", "5:00", "Netflix", "2019");

module.exports = {documental1, documental2};
