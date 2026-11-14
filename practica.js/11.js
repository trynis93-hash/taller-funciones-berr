const edad = 25;
switch (true) {
  case edad < 0:
    console.log("error: la edad no puede ser negativa");
    break;
  case edad <= 11:
    console.log("categoria: infancia (0-11)");
    break;
  case edad <= 17:
    console.log("caegoria: adolecensia (12-18)");
    break;
  case edad <= 59:
    console.log("categoria: adultez (19-59)");
    break;
  default:
    console.log("categoria: persona mayor 60 o mas");
}
