const skills = [
    "Java Development",
    "Spigot / Paper API",
    "Velocity Proxy",
    "Docker & Linux",
    "MySQL Databases",
    "Plugin Architecture",
    "Server Optimization",
    "Community Management",
    "Custom Mechanics",
    "Performance Tuning"
];

const projects = [
    {
        title: "Red Multi-Servidor",
        desc: "Diseño completo de red con proxy, balanceo y múltiples modalidades.",
        tech: "Velocity • PaperMC • Docker"
    },
    {
        title: "Plugins Personalizados",
        desc: "Desarrollo de sistemas de economía, rangos, minijuegos y anti-cheat.",
        tech: "Java • Spigot API • MySQL"
    },
    {
        title: "Servidor Optimizado",
        desc: "Optimización avanzada para alto rendimiento y estabilidad.",
        tech: "PaperMC • Aikar's Flags"
    }
];

const experience = [
    {
        role: "Minecraft Server Manager",
        period: "2024 - Actualidad",
        desc: "Gestión completa de servidores, staff y desarrollo de características."
    },
    {
        role: "Plugin Developer",
        period: "2023 - Actualidad",
        desc: "Creación y mantenimiento de plugins personalizados para diferentes proyectos."
    }
];

function loadSkills() {
    const container = document.getElementById('skills-grid');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.innerHTML = `<strong>${skill}</strong>`;
        container.appendChild(div);
    });
}

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
        alert(`✅ Mensaje recibido correctamente, ${name}. Gracias!`);
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Por favor ingresa tu nombre.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    loadExperience();
});
