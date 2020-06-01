class persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    mayor() {
        if (this.edad >= 18) {
            return this.nombre + " Eres mayor de edad";
        }
        else {
            return this.nombre + " Eres menor de edad";

        }
    }
    masa() {
        return this.nombre + " Tu indice de masa corporal es de : " + this.peso / (this.altura * this.altura);
    }


}

var juan = new persona("Pablo", "32", "Masculino", "85", "1.68");
var pedro = new persona("Pedro", "18", "Masculino", "65", "1.58");
var lucia = new persona("Lucia", "11", "Femenino", "55", "1.70");
console.log(Pablo);

console.log(pedro);
console.log(lucia);
console.log(Pablo.mayor(this.edad));
console.log(Pablo.masa());
console.log(lucia.mayor(this.edad));
console.log(lucia.masa());








