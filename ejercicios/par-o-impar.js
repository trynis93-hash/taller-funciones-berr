const num = parseInt(prompt("Ingrese un par o impar:"));

const result = isEvenOrOdd(num);
alert(result);

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}

alert(result);
