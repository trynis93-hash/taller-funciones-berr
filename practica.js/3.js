const opcion = 2;
const cantidad = 5;
switch (opcion) {
  case 1:
    console.log(
      `${cantidad} metros equivalen a ${cantidad * 100} centimetros.`,
    );
    break;
  case 2:
    console.log(`${cantidad} kilometros equivalen a ${cantidad * 1000} metros`);
    break;
  case 3:
    console.log(`${cantidad} centimetros equivalen a ${cantidad / 100} metros`);
    break;
  default:
    console.log("opcion de convercion no valida");
}
