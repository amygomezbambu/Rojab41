class cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;

    }
    ingreso() {
        if (this.cantidad >= 900) {
            return "No puedes depositar mas dinero, haz un retiro de caja";
        }
        else {
            return "Tu abono de " + "$" + this.cantidad + "se registró correctamente";
        }

    }
    egreso() {
        if (this.cantidad <= 900 && this.cantidad >= 10) {
            return "Tu Retiro de " + this.cantidad + "se registró correctamente";

        }
        else {
            return "No puedes retirar mas dinero. Haz un abono"
        }
    }

}

var perez = new cuenta ("Perez","10");
var gomez = new cuenta ("Gomez" , "1200");

console.log (cuenta);
console.log (perez.egreso (this.cantidad));
console.log (gomez.ingreso (this.cantidad));






