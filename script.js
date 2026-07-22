const projects = [
    {
        title: "Shadow Network",
        desc: "Red multi-servidor completa con proxy Velocity, balanceo de carga y plugins personalizados.",
        tech: "Velocity • PaperMC • Docker • Java 21"
    },
    {
        title: "Gengar Plugin Suite",
        desc: "Desarrollo de plugins custom: economía avanzada, sistemas anti-cheat, minijuegos y más.",
        tech: "Spigot/Paper API • MySQL"
    },
    {
        title: "Ghost Survival",
        desc: "Gestión completa de servidor Survival optimizado para alto rendimiento y experiencia fluida.",
        tech: "PaperMC • LuckPerms • WorldEdit"
    }
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <small style="color:#c4b5fd; margin-top:12px; display:block;">${p.tech}</small>
        `;
        container.appendChild(card);
    });
}

function sendMessage() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        alert(`👻 Mensaje recibido, ${name}! Te contactaré pronto.`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("👻 Por favor ingresa tu nombre.");
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
