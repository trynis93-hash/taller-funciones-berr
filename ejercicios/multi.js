let entrada = prompt("ingrese un numero para multiplicar: ");
let numero = parseInt(entrada);

if (isNaN(numero) || entrada === null || entrada.trim() === "") {
  alert("Por favor, ingrese un número válido.");
  alert("por favor, introduzca un número válido");
} else {
  let resultado = `Tabla de multiplicar del ${numero}:\n\n`;

  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(resultado);
}
