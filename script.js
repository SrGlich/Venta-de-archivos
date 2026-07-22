// Datos del portafolio - Edita esto con tu información real
const skills = [
    "Java Development",
    "Spigot / Paper API",
    "Velocity & Proxy Management",
    "Docker & Linux Servers",
    "MySQL / MongoDB",
    "Plugin Architecture",
    "Server Optimization",
    "Staff & Community Management",
    "Performance Tuning",
    "Custom Game Mechanics"
];

const projects = [
    {
        title: "Red Multi-Servidor",
        desc: "Diseño y gestión completa de una red con múltiples modalidades (Survival, Skyblock, Minijuegos).",
        tech: "Velocity • PaperMC • Java 21 • Docker"
    },
    {
        title: "Sistema de Plugins Custom",
        desc: "Desarrollo de plugins avanzados: economía, rangos, eventos, anti-cheat y progresión.",
        tech: "Spigot API • MySQL • PlaceholderAPI"
    },
    {
        title: "Servidor Optimizado",
        desc: "Optimización de rendimiento para más de 200 jugadores simultáneos con excelente estabilidad.",
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
        desc: "Creación de plugins personalizados para diferentes servidores de la comunidad."
    }
];

// Cargar Skills
function loadSkills() {
    const container = document.getElementById('skills-grid');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.innerHTML = `<strong>${skill}</strong>`;
        container.appendChild(div);
    });
}

// Cargar Proyectos
function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <small>${p.tech}</small>
        `;
        container.appendChild(card);
    });
}

// Cargar Experiencia
function loadExperience() {
    const container = document.getElementById('experience-container');
    experience.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'exp-card';
        card.innerHTML = `
            <h3>${exp.role}</h3>
            <p class="period">${exp.period}</p>
            <p>${exp.desc}</p>
        `;
        container.appendChild(card);
    });
}

function sendMessage() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        alert(`✅ Mensaje recibido, ${name}. Gracias por contactarme.`);
        document.getElementById('name').value = '';
        document.getElementById('discord').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Por favor ingresa tu nombre.");
    }
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    loadExperience();
});
