const nombre = prompt("nombre del pasajero:");
const apellido = prompt("ciudad de origen:");
const destino = prompt("ciudad de destino:");
const kilometros = parseFloat(prompt("numero de kilometros:"));
const precioPorKilometro = parseFloat(prompt("precio por kilometro:"));

//ingreso de datos//
alert(
  "nombre del pasajero: " +
    nombre +
    "\n" +
    "ciudad de origen: " +
    apellido +
    "\n" +
    "ciudad de destino: " +
    destino +
    "\n" +
    "numero de kilometros: " +
    kilometros +
    "\n" +
    "precio por kilometro: " +
    precioPorKilometro,
);

//calculo del precio//
const precioTotal = kilometros * precioPorKilometro;
alert("El precio total del viaje es: " + precioTotal);
