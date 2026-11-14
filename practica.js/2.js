const rolusuario = 1;
switch (rolusuario) {
  case 1:
    console.log("admin - acceso administrativo");
    break;
  case 2:
    console.log("instructor - acceso a plataformacion de formacion");
    break;
  case 3:
    console.log("aprendiz - acceso a formacion");
    break;
  case 4:
    console.log("visitante - acceso limitado");
    break;
  default:
    console.log("rol de usuario no valido");
}
