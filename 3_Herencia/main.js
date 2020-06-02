class Mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;

    }
    alimentarse() {
        return this.nombre + " se está alimentando";
    }
}


var mascota1 = new Mascota("Lucky", 4)

console.log(mascota1);

//subclase mascota 

class Perro extends Mascota {
    constructor(nombre, patas, ladra, cola) {
        super(nombre, patas) //ejecuta constructor de la clase padre
        this.ladra = ladra;
        this.cola = cola;
    }
    truco() {
        return this.nombre + " está haciendo un truco"

    }
}

var perro1 = new Perro("Alfonso", 4, true, false);
console.log(perro1);
console.log(perro1.truco());

class Serpiente extends Mascota {
    constructor(nombre, patas, color, venenosa) {
        super(nombre, patas);
        this.color = color
        this.venenosas = false;

    }
}
var serpiente1 = new Serpiente("Boa", 0, "cafe")

console.log(serpiente1);
console.log(perro1.alimentarse());
console.log(serpiente1.alimentarse());

