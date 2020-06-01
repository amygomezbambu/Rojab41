/*Ejercicio 1 y 2  */

let myPenguin = {
    nombre: 'señor pingu',
    origin: 'linux',
    game: 'tuxracer',
    gender: 'male',
    birth: '1996',
    puedeVolar: true,
    graznar(ruido) {
        console.log(`Escucha mi canto : ${ruido}`);
        return 'Cantas feo'

    },
    saludar(cortesia) {
        console.log('Hello world again  my name  is ' + this.nombre);
        return true;

    },

    volar(aerodinamico) {
        if (this.puedeVolar == false) {
            console.log('No puedo volar :(');
            return false;
        }
        else if (!this.puedeVolar == false) {
            console.log('Sé que puedo volar :v');
            return true;
        }


    },
}


console.log('Hello world my name  is ' + myPenguin.nombre + ' mucho gusto');
console.log(myPenguin.graznar('kaww kaww!'));
console.log(myPenguin.saludar(this.saludar));
console.log(myPenguin.volar(this.volar));