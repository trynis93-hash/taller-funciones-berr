const velocidadMbps = 75;
switch (true) {
  case velocidadMbps < 0:
    console.log("error: la velocidad no puede ser negativa");
    break;
  case velocidadMbps < 10:
    console.log("conexcion: lenta");
    break;
  case velocidadMbps < 50:
    console.log("conexcion: moderada");
    break;
  case velocidadMbps < 100:
    console.log("conexcion: rapida");
    break;
  default:
    console.log("conexcion: muy rapida");
}
