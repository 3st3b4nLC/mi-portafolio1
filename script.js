/* Modo oscuro */
document.getElementById("temaBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* Leer más */
document.getElementById("leerMas").addEventListener("click", () => {
    const extra = document.getElementById("infoExtra");
    extra.classList.toggle("oculto");
    leerMas.textContent = extra.classList.contains("oculto") ? "Leer más" : "Leer menos";
});

/* FORMULARIO → ABRIR GMAIL LISTO PARA ENVIAR */
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        resultado.textContent = "❗ Todos los campos son obligatorios.";
        resultado.style.color = "red";
        return;
    }

    const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1&to=61011845@iestpasm.edu.pe` +
        `&su=Mensaje de ${encodeURIComponent(nombre)}` +
        `&body=${encodeURIComponent("Correo: " + email + "\n\nMensaje:\n" + mensaje)}`;

    window.open(gmailURL, "_blank");

    resultado.textContent = "✔ Gmail se ha abierto con tu mensaje listo.";
    resultado.style.color = "green";
});
