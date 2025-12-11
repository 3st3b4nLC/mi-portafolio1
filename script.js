/* -------- Modo oscuro -------- */
document.getElementById("temaBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* -------- Leer más -------- */
document.getElementById("leerMas").addEventListener("click", () => {
    const extra = document.getElementById("infoExtra");
    extra.classList.toggle("oculto");

    leerMas.textContent = extra.classList.contains("oculto")
        ? "Leer más"
        : "Leer menos";
});

/* -------- Validación del formulario -------- */
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();
    let mensaje = mensajeInput.value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        resultado.textContent = "❗ Todos los campos son obligatorios.";
        resultado.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        resultado.textContent = "❗ El correo no es válido.";
        resultado.style.color = "red";
       return;
    }

    resultado.textContent = "✔ Mensaje enviado correctamente.";
    resultado.style.color = "green";
});
