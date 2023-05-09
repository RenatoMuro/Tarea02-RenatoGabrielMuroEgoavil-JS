/* Crear una aplicación web donde se ingrese un número entero entre el 1 al 100 y determine si es primo o no */
function esPrimo(numero) {
    /* Estructura repetitiva Para... */
    for (let index = 0; index < array.length; index++){
        if (numero % 1 == 0){
            /* Si hay división exacta, NO ES PRIMO */
            return false;
        }
    }

    /* En caso no se encontrara división exacta, ES PRIMO */
    return true;

}

for(let c = 1; c <= 100; c++){
    document.write("<p>Número " + c + " " + (esPrimo(c) ? "ES PRIMO" : "NO ES PRIMO") + "</p>")

    
}