const categoriacliente = "oro";
switch (categoriacliente.toLocaleLowerCase()) {
  case "oro":
  case "plantino":
    console.log("aplica un descuento del 20% ");
    break;
  case "plata":
  case "bronce":
    console.log("aplica un descuento del 10%");
    break;
  default:
    console.log("categoria sin descuento o no reconocida");
}
