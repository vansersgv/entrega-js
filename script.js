
// SOLICITAR AL CLIENTE QUE INGRESE UN NUMERO DE MASCOTA DE FORMA CONSECUTIVAS EMPEZANDO POR EL 1 HASTA 5 O "6" PARA SALIR.
// GENERAR UNA UNICA SALIDA COMPUESTA POR LAS SIGUIENTES MASCOTAS.
// "PERRO"   SI ES 1
// "GATO"    SI ES 2
// "COBALLO" SI ES 3
// "TORTUGA" SI ES 4
// "CONEJO"  SI ES 5

let nombre = prompt ("INGRESA TU NOMBRE")
alert("BIENVENIDO, "+nombre)
let entrada = prompt("ELIGE UNA MASCOTA DEL 1 AL 5 O 6 PARA SALIR")

while (entrada != "6") {
    switch (entrada) {
        case "1":
            alert("PERRO")
            break;
        case "2":
            alert("GATO")
            break;
        case "3":
            alert("COBALLO")
            break;
        case "4":
            alert("TORTUGA")
            break;
        case "5":
            alert("CONEJO")
            break;
    
        default:
            alert("ERROR DEBES INGRESAR UN NUMERO DEL 1 AL 6")
            break;
    }
    entrada = prompt ("ELIGE UNA MASCOTA DEL 1 AL 5 O 6 PARA SALIR")
}

