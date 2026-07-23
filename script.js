// ==================== EMAILJS ====================
const EMAILJS_SERVICE_ID = "service_xfimnwp";
const EMAILJS_TEMPLATE_ID = "template_dexvi6n";
const EMAILJS_PUBLIC_KEY = "RexNOh_t6-ejNVyyn";

function initEmailJS() {
    if (typeof emailjs !== "undefined") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
}

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
        alert("✅ ¡Mensaje enviado correctamente!");
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('message').value = '';
    }).catch(() => {
        alert("❌ Error al enviar. Inténtalo de nuevo.");
    }).finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    });
}

// ==================== CONTENIDO DE CATEGORÍAS ====================

const skills = [
    "Java Development",
    "Spigot / Paper API",
    "Velocity Proxy",
    "Docker & Linux Servers",
    "MySQL Databases",
    "Plugin Architecture",
    "Server Optimization",
    "Community Management",
    "Custom Game Mechanics",
    "Performance Tuning"
];

const projects = [
    {
        title: "Red Multi-Servidor",
        desc: "Diseño y gestión completa de una red con proxy Velocity y múltiples modalidades.",
        tech: "Velocity • PaperMC • Docker • Java 21"
    },
    {
        title: "Plugins Personalizados",
        desc: "Desarrollo de sistemas de economía, rangos, minijuegos, anti-cheat y progresión.",
        tech: "Spigot API • MySQL • PlaceholderAPI"
    },
    {
        title: "Servidor Optimizado",
        desc: "Optimización avanzada para alto número de jugadores con excelente estabilidad.",
        tech: "PaperMC • Aikar's Flags • Monitoring"
    }
];

const experience = [
    {
        role: "Minecraft Server Manager",
        period: "2024 - Actualidad",
        desc: "Gestión completa de servidores, coordinación de staff y desarrollo de nuevas características."
    },
    {
        role: "Plugin Developer",
        period: "2023 - Actualidad",
        desc: "Creación y mantenimiento de plugins personalizados para diferentes proyectos."
    }
];

// Cargar las secciones
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

function loadExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = '';
    experience.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'exp-card';
        card.innerHTML = `<h3>${exp.role}</h3><p class="period">${exp.period}</p><p>${exp.desc}</p>`;
        container.appendChild(card);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    loadExperience();
    initEmailJS();
});
