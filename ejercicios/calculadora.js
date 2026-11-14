const firnumber = parseFloat(prompt("Ingrese el primer número:"));
const secnumber = parseFloat(prompt("Ingrese el segundo número:"));

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

const sumResult = suma(firnumber, secnumber);
const restResult = resta(firnumber, secnumber);
const multResult = multiplicacion(firnumber, secnumber);
const divResult = division(firnumber, secnumber);

alert(`Resultados:
Suma: ${sumResult}
Resta: ${restResult}
Multiplicación: ${multResult}
División: ${divResult}`);
