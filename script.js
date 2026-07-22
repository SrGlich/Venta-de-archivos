// ==================== EMAILJS CONFIG ====================
const EMAILJS_SERVICE_ID = "service_xfimnwp";
const EMAILJS_TEMPLATE_ID = "template_dexvi6n";
const EMAILJS_PUBLIC_KEY = "RexNOh_t6-ejNVyyn";

// Inicializar EmailJS
function initEmailJS() {
    if (typeof emailjs !== "undefined") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
}

// Enviar mensaje
function sendMessage() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const messageText = document.getElementById('message').value.trim();

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
        alert("✅ ¡Mensaje enviado correctamente! Gracias.");
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('message').value = '';
    }).catch((error) => {
        console.error(error);
        alert("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
    }).finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    });
}

// Datos del portafolio
const skills = [
    "Java Development", "Spigot / Paper API", "Velocity Proxy",
    "Docker & Linux", "MySQL Databases", "Plugin Architecture",
    "Server Optimization", "Community Management"
];

const projects = [
    {
        title: "Red Multi-Servidor",
        desc: "Diseño y gestión completa de red con proxy.",
        tech: "Velocity • PaperMC • Docker"
    },
    {
        title: "Plugins Personalizados",
        desc: "Economía, rangos, minijuegos y sistemas avanzados.",
        tech: "Java • Spigot API • MySQL"
    },
    {
        title: "Servidor Optimizado",
        desc: "Optimización para alto rendimiento y estabilidad.",
        tech: "PaperMC"
    }
];

// Cargar secciones
function loadSkills() {
    const container = document.getElementById('skills-grid');
    container.innerHTML = '';
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.innerHTML = `<strong>${skill}</strong>`;
        container.appendChild(div);
    });
}

function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><small>${p.tech}</small>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    initEmailJS();
});
