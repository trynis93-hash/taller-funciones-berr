let cantidadNotas = parseInt(prompt("cuantas notas desea ingresar?"));

if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
  alert("Por favor, ingrese un número válido mayor que cero.");
} else {
  let sumaNotas = 0;

  for (let i = 1; i <= cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i} (de 0.0 a 5.0):`));

    while (isNaN(nota) || nota < 0.0 || nota > 5.0) {
      nota = parseFloat(
        prompt(
          `Nota inválida. Ingrese la nota ${i} nuevamente (de 0.0 a 5.0):`,
        ),
      );
    }

    sumaNotas += nota;
  }

  let promedio = sumaNotas / cantidadNotas;
  alert(`El promedio de las notas ingresadas es: ${promedio.toFixed(2)}`);

  if (promedio >= 3.0) {
    alert(
      "¡Felicidades! Has aprobado con un promedio de " + promedio.toFixed(2),
    );
  } else {
    alert("Lo siento, has reprobado con un promedio de " + promedio.toFixed(2));
  }
}
