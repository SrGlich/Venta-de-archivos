// ==================== EMAILJS ====================
const EMAILJS_SERVICE_ID = "service_xfimnwp";
const EMAILJS_TEMPLATE_ID = "template_dexvi6n";
const EMAILJS_PUBLIC_KEY = "RexNOh_t6-ejNVyyn";

function sendMessage() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const messageText = document.getElementById('message').value.trim();

    if (!name || !contact || !messageText) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const btn = document.querySelector('button');
    btn.textContent = "Enviando...";
    btn.disabled = true;

    console.log("Intentando enviar...");

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: name,
        contact_info: contact,
        message: messageText
    }).then((response) => {
        console.log("Éxito:", response);
        alert("✅ ¡Mensaje enviado correctamente!");
        // Limpiar
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('message').value = '';
    }).catch((error) => {
        console.error("Error completo:", error);
        alert("❌ Error al enviar. Revisa la consola (F12) y dime qué dice.");
    }).finally(() => {
        btn.textContent = "Enviar Mensaje";
        btn.disabled = false;
    });
}

// Cargar contenido
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada - NRWODD Portfolio");
    
    // Cargar skills y projects (si los tienes)
    // ... (puedes agregar después)
});
