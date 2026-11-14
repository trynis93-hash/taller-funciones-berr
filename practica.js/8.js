const producto = "portatil";
switch (producto.toLowerCase()) {
  case "portatil":
  case "computador-escritorio":
    console.log("categoria: equipos de computo");
    break;
  case "teclado":
  case "raton":
  case "monitor":
    console.log("categoria: perifericos");
    break;
  default:
    console.log("categoria no asignada");
}
