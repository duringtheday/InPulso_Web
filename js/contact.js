
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tmContactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact_name").value;
    const email = document.getElementById("contact_email").value;
    const message = document.getElementById("contact_message").value;

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Simulación de envío (en producción, se reemplazaría por una llamada fetch real o redirección)
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    form.reset();
  });
});
