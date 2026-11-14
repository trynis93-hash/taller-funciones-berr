(function () {
  "use strict";
  const campos = ["nombre", "cargo", "ciudad", "edad"];
  const input = (k) => document.getElementById("f-" + k);
  const error = (k) => document.getElementById("e-" + k);
  const mostrarError = (k, msg) => {
    const e = error(k);
    e.textContent = msg;
    e.style.display = "block";
  };
  const limpiarError = (k) => {
    const e = error(k);
    e.textContent = "";
    e.style.display = "none";
  };

  campos.forEach(function (k) {
    input(k).addEventListener("input", () => {
      limpiarError(k);
    });
  });

  document.getElementById("f-enviar").addEventListener("click", function () {
    let valores = {};
    let ok = true;
    ["nombre", "cargo", "ciudad"].forEach(function (k) {
      const v = input(k).value.trim();
      if (!v) {
        mostrarError(k, "Completa este campo");
        ok = false;
      } else {
        limpiarError(k);
        valores[k] = v;
      }
    });
    const edad = parseInt(input("edad").value, 10);
    if (isNaN(edad)) {
      mostrarError("edad", "Completa este campo");
      ok = false;
    } else if (edad < 16 || edad > 99) {
      mostrarError("edad", "Debe estar entre 16 y 99");
      ok = false;
    } else {
      limpiarError("edad");
      valores.edad = edad;
    }

    if (!ok) {
      document.getElementById("f-resumen").style.display = "none";
      return;
    }

    document.getElementById("r-nombre").textContent = valores.nombre;
    document.getElementById("r-cargo").textContent = valores.cargo;
    document.getElementById("r-ciudad").textContent = valores.ciudad;
    document.getElementById("r-edad").textContent = valores.edad + " años";
    document.getElementById("f-resumen").style.display = "block";
  });

  document.getElementById("f-limpiar").addEventListener("click", function () {
    campos.forEach(function (k) {
      input(k).value = "";
      limpiarError(k);
    });
    document.getElementById("f-resumen").style.display = "none";
  });
})();
