const tipovehiculo = "automvil";
switch (tipovehiculo.toLowerCase()) {
  case "bicicleta":
  case "patineta":
    console.log("tarifa: $1.000");
    break;
  case "automovil":
  case "camioneta":
    console.log("tarifa $5.000");
    break;
  case "camion":
  case "bus":
    console.log("tarifa: $10.000");
    break;
  default:
    console.log("ERROR: vehiculo no reconocido");
}
