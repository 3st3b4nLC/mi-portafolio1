/* -----------------------
   FUNCIÓN 1: Modo oscuro
------------------------- */
document.getElementById("temaBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* ------------------------------------------------
   FUNCIÓN 2: Mostrar / Ocultar texto adicional
-------------------------------------------------- */
document.getElementById("leerMas").addEventListener("click", () => {
    const extra = document.getElementById("infoExtra");
    extra.classList.toggle("oculto");

    if (extra.classList.contains("oculto")) {
        leerMas.textContent = "Leer más";
    } else {
        leerMas.textContent = "Leer menos";
    }
});

/* -------------------------------
   FUNCIÓN 3: Validar formulario
-------------------------------- */
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let resultado = document.getElementById("resultado");

    if (nombre === "" || email === "" || mensaje === "") {
        resultado.textContent = "❗ Todos los campos son obligatorios.";
        resultado.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        resultado.textContent = "❗ El email no es válido.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "✔ Mensaje enviado correctamente.";
    resultado.style.color = "green";
});
