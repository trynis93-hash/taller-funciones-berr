const opciontienda = 2;
switch (opciontienda) {
  case 1:
    console.log("consultar precios");
    break;
  case 2:
  case 3:
    console.log("acceso a la gestion de inventario y registro de ventas");
    break;
  case 4:
    console.log("salir del programa");
    break;
  default:
    console.log("opcion no valida");
}
