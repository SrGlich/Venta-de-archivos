const skills = [
    "Java (Spigot / Paper API)",
    "Velocity & Proxy Servers",
    "Docker & Linux Server Management",
    "MySQL / Bases de Datos",
    "Optimización de Rendimiento",
    "Gestión de Staff y Comunidad",
    "Plugin Development",
    "Configuraciones Avanzadas"
];

const projects = [
    {
        title: "Red Principal",
        desc: "Gestión completa de una red de servidores Minecraft (Survival, Skyblock, Minijuegos).",
        tech: "Velocity • PaperMC • Java"
    },
    {
        title: "Plugins Personalizados",
        desc: "Desarrollo de sistemas únicos: economía, rangos, eventos y anti-cheat.",
        tech: "Spigot API • MySQL"
    },
    {
        title: "Servidor Optimizado",
        desc: "Optimización de rendimiento para alto número de jugadores simultáneos.",
        tech: "PaperMC • Docker"
    }
];

function loadSkills() {
    const container = document.getElementById('skills-grid');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.textContent = skill;
        container.appendChild(div);
    });
}

function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <small>${project.tech}</small>
        `;
        container.appendChild(card);
    });
}

function sendMessage() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        alert(`👻 ¡Mensaje recibido, ${name}! Gracias por contactarme.`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("👻 Por favor ingresa tu nombre.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
});
