const montocompra = 250000;
switch (true) {
  case montocompra >= 500000:
    console.log("descuento del 15%");
    break;
  case montocompra >= 200000:
    console.log("descuento del 10%");
    break;
  case montocompra >= 100000:
    console.log("descuento del 5%");
    break;
  case montocompra >= 0:
    console.log("sin descuento");
    break;
  default:
    console.log("el monto ingresado no es valido");
}
