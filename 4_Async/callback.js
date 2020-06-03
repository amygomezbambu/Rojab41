function superior (consola, tipo) {
    return consola(tipo);
}

function advertencia (mensaje){
    console.warn ("Cuidado!!");
}

function informacion (mensaje){
    return console.info ("Info importante"); 
}
function log (mensaje){
    return console.log("mensaje");

}

superior (advertencia, "esto es un warning");
superior (informacion, "esto es un poco de informacion");
superior (log, "esto es un mensaje");


function segundaOrden (cadena, convertir) {
return convertir (cadena);
}

function mayusculas (cadena){
return cadena.toUpperCase ()

}
function minusculas (cadena){
    return cadena.toLowerCase ();
}

console.log (segundaOrden ("este es un mensaje en mayusuculas", mayusculas));
console.log (segundaOrden ("ESTE ES UN MENSAJE EN MINUSCULAS", minusculas));
