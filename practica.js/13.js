const distanciaKM = 6.5;
switch (true) {
  case distanciaKM <= 0:
    console.log("error: ingrese una distacia valida mayor a 0 KM");
    break;
  case distanciaKM <= 3:
    console.log("tarifa de domicilio: $50000");
    break;
  case distanciaKM <= 8:
    console.log("tarifa de domicilio: $25000");
    break;
  case distanciaKM <= 15:
    console.log("tarifa de domicilio: $10000");
    break;
  default:
    console.log("tarifa de domicilio: $5000");
}
