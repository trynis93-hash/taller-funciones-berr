(function () {
  // ---------- helpers ----------
  const $ = (id) => document.getElementById(id);
  const num = (id) => parseFloat($(id).value);
  const val = (id) => $(id).value.trim();
  function fmt(n) {
    if (!isFinite(n)) return "—";
    const r = Math.round(n * 100) / 100;
    return r.toLocaleString("es-CO", { maximumFractionDigits: 2 });
  }
  function setSteps(elId, lines) {
    $(elId).innerHTML = lines.map((l) => "<li>" + l + "</li>").join("");
  }

  // ---------- exercises data ----------
  const exercises = [
    {
      tag: "T1 · Ej 1",
      title: "Flores de María",
      type: "directa",
      text: "María puede plantar 15 flores en 3 horas. ¿Cuántas flores podrá plantar en 8 horas al mismo ritmo?",
      h1: "Horas",
      h2: "Flores",
      a: 3,
      b: 15,
      c: 8,
    },
    {
      tag: "T1 · Ej 2",
      title: "Grifos y piscina",
      type: "inversa",
      text: "Tres grifos llenan una piscina en 6 horas. Si solo se usa un grifo, ¿cuánto tardará en llenarla?",
      h1: "Grifos",
      h2: "Horas",
      a: 3,
      b: 6,
      c: 1,
    },
    {
      tag: "T1 · Ej 3",
      title: "Amigos y jardín",
      type: "inversa",
      text: "5 amigos limpian un jardín en 4 horas. Si solo 2 amigos lo limpian, ¿cuánto tiempo les tomará?",
      h1: "Amigos",
      h2: "Horas",
      a: 5,
      b: 4,
      c: 2,
    },
    {
      tag: "T1 · Ej 4",
      title: "Gasolina de Juan",
      type: "directa",
      text: "El coche de Juan consume 6 litros de gasolina cada 90 km. Para un viaje de 150 km, ¿cuántos litros necesitará?",
      h1: "Kilómetros",
      h2: "Litros",
      a: 90,
      b: 6,
      c: 150,
    },
    {
      tag: "T1 · Ej 5",
      title: "Fiesta de pizza",
      type: "directa",
      text: "Un grupo come 30 pizzas en 2 horas. Si invitan al doble de estudiantes y el tiempo no cambia, ¿cuántas pizzas comerán?",
      h1: "Grupo (veces)",
      h2: "Pizzas",
      a: 1,
      b: 30,
      c: 2,
    },
    {
      tag: "T1 · Ej 6",
      title: "Jornada extendida",
      type: "directa",
      text: "Un empleado gana $33.000 por 8 horas de trabajo. Si la jornada aumenta a 10 horas, ¿cuál será su nuevo salario?",
      h1: "Horas",
      h2: "Pesos",
      a: 8,
      b: 33000,
      c: 10,
    },
    {
      tag: "T1 · Ej 7",
      title: "Maratón de helados",
      type: "directa",
      text: "5 estudiantes comen 50 helados en 1 hora. Si ahora son el triple de estudiantes, ¿cuántos helados comerán en una hora?",
      h1: "Estudiantes",
      h2: "Helados",
      a: 5,
      b: 50,
      c: 15,
    },
    {
      tag: "T1 · Ej 8",
      title: "Noche de baile",
      type: "directa",
      text: "6 amigos bailan 60 canciones en 3 horas. Si invitan al doble de amigos y mantienen el ritmo, ¿cuántas canciones bailarán en 3 horas?",
      h1: "Amigos",
      h2: "Canciones",
      a: 6,
      b: 60,
      c: 12,
    },
    {
      tag: "T3 · Ej 1",
      title: "Bolsos blancos",
      type: "porcentaje",
      mode: "de",
      text: "Un local tiene 120 bolsos; el 35% son blancos. ¿Cuántos bolsos blancos hay?",
      p: 35,
      n: 120,
    },
    {
      tag: "T3 · Ej 1",
      title: "Bolsos rojos",
      type: "porcentaje",
      mode: "de",
      text: "De los mismos 120 bolsos, el 5% son rojos. ¿Cuántos bolsos rojos hay?",
      p: 5,
      n: 120,
    },
    {
      tag: "T3 · Ej 2",
      title: "Baladas — empresa A",
      type: "porcentaje",
      mode: "que",
      text: "En la empresa A, a 12 de sus 60 empleados les gustan las baladas. ¿Qué porcentaje representa?",
      a: 12,
      b: 60,
    },
    {
      tag: "T3 · Ej 2",
      title: "Baladas — empresa B",
      type: "porcentaje",
      mode: "que",
      text: "En la empresa B, a 18 de sus 120 empleados les gustan las baladas. ¿Qué porcentaje representa? (Compara con la empresa A: 20%).",
      a: 18,
      b: 120,
    },
    {
      tag: "T3 · Ej 3",
      title: "Dardos fallidos",
      type: "porcentaje",
      mode: "que",
      text: "Kayla falló 513 de sus 684 lanzamientos de dardos. ¿Qué porcentaje de lanzamientos fallidos tiene?",
      a: 513,
      b: 684,
    },
    {
      tag: "T3 · Ej 4",
      title: "Preguntas falladas",
      type: "porcentaje",
      mode: "de",
      text: "Ángel aprobó el 85% de 160 preguntas (falló el 15% restante). ¿En cuántas preguntas no acertó?",
      p: 15,
      n: 160,
    },
    {
      tag: "T3 · Ej 5",
      title: "Ascenso de Martín",
      type: "porcentaje",
      mode: "var",
      text: "El sueldo de Martín es de $1.000. Si lo ascienden, su sueldo aumenta un 35%. ¿Cuál sería su nuevo sueldo?",
      n: 1000,
      p: 35,
      dir: "aumento",
    },
    {
      tag: "T3 · Ej 6",
      title: "Taller mecánico",
      type: "inversa",
      text: "10 trabajadores arreglan un automóvil en 5 días. ¿Cuántos trabajadores se necesitan para hacerlo en 2 días?",
      h1: "Trabajadores",
      h2: "Días",
      a: 10,
      b: 5,
      c: 2,
    },
    {
      tag: "T3 · Ej 7",
      title: "Pintura para la valla",
      type: "directa",
      text: "Se usan 9 litros de pintura para 100 m de valla. ¿Cuántos litros se necesitan para 134 m?",
      h1: "Metros",
      h2: "Litros",
      a: 100,
      b: 9,
      c: 134,
    },
    {
      tag: "T3 · Ej 8",
      title: "Tanque de gasolina",
      type: "directa",
      text: "5 galones de gasolina cuestan $54.550. ¿Cuánto cuesta llenar 12 galones?",
      h1: "Galones",
      h2: "Pesos",
      a: 5,
      b: 54550,
      c: 12,
    },
  ];

  // ---------- tab state ----------
  let currentTab = "directa";
  let currentPMode = "de";
  let currentVarDir = "aumento";

  function switchTab(tab) {
    currentTab = tab;
    ["directa", "inversa", "porcentaje"].forEach((t) => {
      $("panel-" + t).hidden = t !== tab;
      $("tabbtn-" + t).setAttribute(
        "aria-selected",
        t === tab ? "true" : "false",
      );
    });
    if (tab === "directa") updateDirecta();
    if (tab === "inversa") updateInversa();
    if (tab === "porcentaje") updatePercent();
  }
  ["directa", "inversa", "porcentaje"].forEach((t) => {
    $("tabbtn-" + t).addEventListener("click", () => switchTab(t));
  });

  function switchPMode(mode) {
    currentPMode = mode;
    ["de", "que", "total", "var"].forEach((m) => {
      $("pbody-" + m).classList.toggle("hidden", m !== mode);
      $("pmodebtn-" + m).setAttribute(
        "aria-selected",
        m === mode ? "true" : "false",
      );
    });
    updatePercent();
  }
  ["de", "que", "total", "var"].forEach((m) => {
    $("pmodebtn-" + m).addEventListener("click", () => switchPMode(m));
  });

  $("vt-aumento").addEventListener("click", () => {
    currentVarDir = "aumento";
    syncVarToggle();
    updatePercent();
  });
  $("vt-descuento").addEventListener("click", () => {
    currentVarDir = "descuento";
    syncVarToggle();
    updatePercent();
  });
  function syncVarToggle() {
    $("vt-aumento").setAttribute(
      "aria-selected",
      currentVarDir === "aumento" ? "true" : "false",
    );
    $("vt-descuento").setAttribute(
      "aria-selected",
      currentVarDir === "descuento" ? "true" : "false",
    );
  }

  // ---------- compute: directa ----------
  function updateDirecta() {
    const h1 = val("d-h1") || "Magnitud 1";
    const h2 = val("d-h2") || "Magnitud 2";
    $("rel1-directa").textContent = h1;
    $("rel2-directa").textContent = h2;
    const a = num("d-a"),
      b = num("d-b"),
      c = num("d-c");
    if ([a, b, c].some(isNaN) || a === 0) {
      $("d-x").value = "—";
      $("d-result").textContent = "—";
      setSteps("d-steps", [
        "Completa los tres valores conocidos para ver el resultado.",
      ]);
      return;
    }
    const x = (b * c) / a;
    $("d-x").value = fmt(x);
    $("d-result").textContent = fmt(x) + " " + h2;
    setSteps("d-steps", [
      fmt(a) + " " + h1 + " &nbsp;→&nbsp; " + fmt(b) + " " + h2,
      fmt(c) + " " + h1 + " &nbsp;→&nbsp; x",
      "x = (" + fmt(b) + " × " + fmt(c) + ") ÷ " + fmt(a),
      "x = " + fmt(x) + " " + h2,
    ]);
  }

  // ---------- compute: inversa ----------
  function updateInversa() {
    const h1 = val("i-h1") || "Magnitud 1";
    const h2 = val("i-h2") || "Magnitud 2";
    $("rel1-inversa").textContent = h1;
    $("rel2-inversa").textContent = h2;
    const a = num("i-a"),
      b = num("i-b"),
      c = num("i-c");
    if ([a, b, c].some(isNaN) || c === 0) {
      $("i-x").value = "—";
      $("i-result").textContent = "—";
      setSteps("i-steps", [
        "Completa los tres valores conocidos para ver el resultado.",
      ]);
      return;
    }
    const x = (a * b) / c;
    $("i-x").value = fmt(x);
    $("i-result").textContent = fmt(x) + " " + h2;
    setSteps("i-steps", [
      fmt(a) + " " + h1 + " &nbsp;→&nbsp; " + fmt(b) + " " + h2,
      fmt(c) + " " + h1 + " &nbsp;→&nbsp; x",
      "x = (" + fmt(a) + " × " + fmt(b) + ") ÷ " + fmt(c),
      "x = " + fmt(x) + " " + h2,
    ]);
  }

  // ---------- compute: porcentaje ----------
  function updatePercent() {
    if (currentPMode === "de") {
      const p = num("p-de-p"),
        n = num("p-de-n");
      $("p-de-bar").style.width =
        Math.max(0, Math.min(100, isNaN(p) ? 0 : p)) + "%";
      if ([p, n].some(isNaN)) {
        $("p-result").textContent = "—";
        setSteps("p-steps", ["Completa el porcentaje y el total."]);
        return;
      }
      const x = (p / 100) * n;
      $("p-result").textContent = fmt(x);
      setSteps("p-steps", [
        "x = (" + fmt(p) + " ÷ 100) × " + fmt(n),
        "x = " + fmt(x),
      ]);
    } else if (currentPMode === "que") {
      const a = num("p-que-a"),
        b = num("p-que-b");
      if ([a, b].some(isNaN) || b === 0) {
        $("p-result").textContent = "—";
        setSteps("p-steps", ["Completa la parte y el total."]);
        return;
      }
      const x = (a / b) * 100;
      $("p-que-bar").style.width = Math.max(0, Math.min(100, x)) + "%";
      $("p-result").textContent = fmt(x) + "%";
      setSteps("p-steps", [
        "x = (" + fmt(a) + " ÷ " + fmt(b) + ") × 100",
        "x = " + fmt(x) + "%",
      ]);
    } else if (currentPMode === "total") {
      const a = num("p-total-a"),
        p = num("p-total-p");
      if ([a, p].some(isNaN) || p === 0) {
        $("p-result").textContent = "—";
        setSteps("p-steps", ["Completa la parte conocida y su porcentaje."]);
        return;
      }
      const x = (a * 100) / p;
      $("p-result").textContent = fmt(x);
      setSteps("p-steps", [
        "x = (" + fmt(a) + " × 100) ÷ " + fmt(p),
        "x = " + fmt(x),
      ]);
    } else if (currentPMode === "var") {
      const n = num("p-var-n"),
        p = num("p-var-p");
      if ([n, p].some(isNaN)) {
        $("p-result").textContent = "—";
        setSteps("p-steps", ["Completa el valor inicial y el porcentaje."]);
        return;
      }
      const delta = n * (p / 100);
      const x = currentVarDir === "aumento" ? n + delta : n - delta;
      $("p-result").textContent = fmt(x);
      setSteps("p-steps", [
        (currentVarDir === "aumento" ? "Aumento" : "Descuento") +
          " = " +
          fmt(n) +
          " × (" +
          fmt(p) +
          " ÷ 100) = " +
          fmt(delta),
        "Nuevo valor = " +
          fmt(n) +
          " " +
          (currentVarDir === "aumento" ? "+" : "−") +
          " " +
          fmt(delta),
        "x = " + fmt(x),
      ]);
    }
  }

  // hide banner + recompute on any real user keystroke
  document.querySelector(".calculators").addEventListener("input", (e) => {
    hideBanner();
    if (e.target.closest("#panel-directa")) updateDirecta();
    if (e.target.closest("#panel-inversa")) updateInversa();
    if (e.target.closest("#panel-porcentaje")) updatePercent();
  });

  function showBanner(tag, text, type) {
    $("banner").classList.remove("hidden");
    const tagEl = $("banner-tag");
    tagEl.textContent = tag;
    tagEl.className = "banner-tag badge-" + type;
    $("banner-text").textContent = text;
  }
  function hideBanner() {
    $("banner").classList.add("hidden");
  }
  $("banner-close").addEventListener("click", hideBanner);

  // ---------- load exercise into calculator ----------
  function loadExercise(idx) {
    const ex = exercises[idx];
    if (ex.type === "directa") {
      $("d-h1").value = ex.h1;
      $("d-h2").value = ex.h2;
      $("d-a").value = ex.a;
      $("d-b").value = ex.b;
      $("d-c").value = ex.c;
      switchTab("directa");
    } else if (ex.type === "inversa") {
      $("i-h1").value = ex.h1;
      $("i-h2").value = ex.h2;
      $("i-a").value = ex.a;
      $("i-b").value = ex.b;
      $("i-c").value = ex.c;
      switchTab("inversa");
    } else if (ex.type === "porcentaje") {
      if (ex.mode === "de") {
        $("p-de-p").value = ex.p;
        $("p-de-n").value = ex.n;
      }
      if (ex.mode === "que") {
        $("p-que-a").value = ex.a;
        $("p-que-b").value = ex.b;
      }
      if (ex.mode === "var") {
        $("p-var-n").value = ex.n;
        $("p-var-p").value = ex.p;
        currentVarDir = ex.dir || "aumento";
        syncVarToggle();
      }
      switchTab("porcentaje");
      switchPMode(ex.mode);
    }
    showBanner(ex.tag, ex.text, ex.type);
    $("calculator").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- bank grid ----------
  const grid = $("card-grid");
  exercises.forEach((ex, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.type = ex.type;
    const badgeLabel =
      ex.type === "directa"
        ? "Directa"
        : ex.type === "inversa"
          ? "Inversa"
          : "Porcentaje";
    card.innerHTML =
      '<div class="card-top">' +
      '<span class="card-tag">' +
      ex.tag +
      "</span>" +
      '<span class="card-badge badge-' +
      ex.type +
      '">' +
      badgeLabel +
      "</span>" +
      "</div>" +
      "<h3>" +
      ex.title +
      "</h3>" +
      "<p>" +
      ex.text +
      "</p>" +
      '<button class="card-load">Cargar en la calculadora →</button>';
    card
      .querySelector(".card-load")
      .addEventListener("click", () => loadExercise(idx));
    grid.appendChild(card);
  });

  // ---------- filter chips ----------
  const chipFilters = ["todos", "directa", "inversa", "porcentaje"];
  function applyFilter(f) {
    chipFilters.forEach((c) =>
      $("chipbtn-" + c).setAttribute(
        "aria-pressed",
        c === f ? "true" : "false",
      ),
    );
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display =
        f === "todos" || card.dataset.type === f ? "" : "none";
    });
  }
  chipFilters.forEach((f) =>
    $("chipbtn-" + f).addEventListener("click", () => applyFilter(f)),
  );
  applyFilter("todos");

  // ---------- init ----------
  syncVarToggle();
  switchTab("directa");
  switchPMode("de");
  showBanner(exercises[0].tag, exercises[0].text, exercises[0].type);
})();
