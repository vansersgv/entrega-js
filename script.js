
//MI PROYECTO FINAL SE TRATA DE UN SITIO WEB, CON UN CARRITO PARA VENTA DE PRODUCTOS EN CERAMICA, ESPERO IR POR BUEN CAMINO. GRACIAS  

let productos = [];
class Productos {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new Productos("6 Tazas Decoradas",10000);
const producto2 = new Productos("6 Platos Decorados",15000);
const producto3 = new Productos("Ensaladera",8000);
const producto4 = new Productos("6 Cuencos a Eleccion",7900);
const producto5 = new Productos("Jarron Cerdeco",1900);
const producto6 = new Productos("Juego de Te",7000);

productos.push(producto1,producto2,producto3,producto4,producto5,producto6);

let elegidoPorElUsuario = prompt(`¿Que producto quiere agregar al carrito?\n1- ${productos[0].nombre} -- Precio: $${productos[0].precio}\n2- ${productos[1].nombre} -- Precio: $${productos[1].precio}\n3- ${productos[2].nombre} -- Precio: $${productos[2].precio}\n4- ${productos[3].nombre} -- Precio: $${productos[3].precio}\n5- ${productos[4].nombre} -- Precio: $${productos[4].precio}\n6- ${productos[5].nombre} -- Precio: $${productos[5].precio}\n\nEscriba solo los numeros separados por un espacio\nPor ejemplo: 1 3 5\nLos productos NO se pueden repetir`)
let arrElegidos = elegidoPorElUsuario.trim().split(" ");
let validador = false;

//SI EL USUARIO NO INGRESO CORRECTAMENTE LOS PRODUCTOS, AL VALIDADOR LOS CONVIERTO EN TRUE

for (let i = 0; i < arrElegidos.length; i++) {
    const element = Number(arrElegidos[i]);
    if ((element < 1) || (element > 6) || (isNaN(element)) || (arrElegidos[i] == "") || (arrElegidos.length > 6)) {
        validador = true;
    }
}

//ACA USO EL VALIDADOR PARA QUE EL USUARIO INGRESE CORRECTAMENTE LOS PRODUCTOS QUE QUIERE

while (validador){
    alert("No ingresó productos válidos")
    elegidoPorElUsuario = prompt(`Vuelva a ingresar los productos (lea la forma correcta de ingresarlos abajo)\nRecuerde que por pedido solo puede agregar 1 producto de cada uno\n1- ${productos[0].nombre} -- Precio: $${productos[0].precio}\n2- ${productos[1].nombre} -- Precio: $${productos[1].precio}\n3- ${productos[2].nombre} -- Precio: $${productos[2].precio}\n4- ${productos[3].nombre} -- Precio: $${productos[3].precio}\n5- ${productos[4].nombre} -- Precio: $${productos[4].precio}\n6- ${productos[5].nombre} -- Precio: $${productos[5].precio}\n\nEscriba solo los numeros separados por un espacio\nPor ejemplo: 1 3 5\nLos productos NO se pueden repetir`)
    arrElegidos = elegidoPorElUsuario.trim().split(" ");
    validador = false;
    for (let i = 0; i < arrElegidos.length; i++) {
        const element = Number(arrElegidos[i]);
        if ((element < 1) || (element > 6) || (isNaN(element)) || (arrElegidos[i] == "") || (arrElegidos.length > 6)) {
            validador = true;
        }
    }
}

for (let i = 0; i < arrElegidos.length; i++) {
    const element = Number(arrElegidos[i]);
    productos[element - 1].vender();
}

let productosElegidos = productos.filter( (elem) => elem.vendido === true);
let stringDeElegidos = "";
productosElegidos.forEach(element => {
    return stringDeElegidos = stringDeElegidos + "- " + element.nombre + "\n";
});
let totalAPagar = productosElegidos.reduce((acc,producto) => acc + producto.precio, 0);
if(productosElegidos.length == 1){
    alert(`Los producto elegido es:\n\n${stringDeElegidos}\nEl total a pagar por el producto es: $${totalAPagar}`)
}else {
    alert(`Los productos elegidos son:\n\n${stringDeElegidos}\nEl total a pagar por los ${productosElegidos.length} productos es: $${totalAPagar}`)
}

