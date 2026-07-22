// ==================== EMAILJS ====================
const EMAILJS_SERVICE_ID = "service_xfimnwp";
const EMAILJS_TEMPLATE_ID = "template_dexvi6n";
const EMAILJS_PUBLIC_KEY = "RexNOh_t6-ejNVyyn";

function sendMessage() {
    const nameField = document.getElementById('name');
    const contactField = document.getElementById('contact');
    const messageField = document.getElementById('message');

    if (!nameField || !contactField || !messageField) {
        alert("Error: No se encontraron los campos del formulario.");
        return;
    }

    const name = nameField.value.trim();
    const contact = contactField.value.trim();
    const messageText = messageField.value.trim();

    if (!name || !contact || !messageText) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const btn = document.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = "Enviando...";
    btn.disabled = true;

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: name,
        contact_info: contact,
        message: messageText
    }).then(() => {
        alert("✅ ¡Mensaje enviado correctamente!");
        nameField.value = '';
        contactField.value = '';
        messageField.value = '';
    }).catch((error) => {
        console.error("Error:", error);
        alert("❌ Error al enviar el mensaje. Revisa la consola.");
    }).finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    });
}

// Cargar contenido
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada - NRWODD Portfolio");
    
    // Cargar skills y projects (si los tienes)
    // ... (puedes agregar después)
});
