// === CONFIGURA ESTO CON TUS DATOS DE EMAILJS ===
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";

function sendMessage() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !contact || !message) {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Mostrar mensaje de enviando
    const btn = document.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = "Enviando...";
    btn.disabled = true;

    // Enviar con EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        contact: contact,
        message: message
    }).then(() => {
        alert("✅ ¡Mensaje enviado correctamente! Gracias.");
        // Limpiar formulario
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('message').value = '';
    }).catch(() => {
        alert("❌ Hubo un error al enviar. Inténtalo de nuevo.");
    }).finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    });
}

// Cargar el resto de funciones (skills, projects, etc.)
// ... (mantén el resto del script.js anterior)
