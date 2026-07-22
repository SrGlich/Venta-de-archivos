// Gengar Portfolio Script
const projects = [
    {
        title: "Shadow Network",
        desc: "Red completa de servidores Minecraft con proxy Velocity.",
        tech: "Paper, Velocity, Docker"
    },
    {
        title: "Gengar Plugin Pack",
        desc: "Plugins personalizados: economía, minijuegos y sistemas ghost.",
        tech: "Java, Spigot API, MySQL"
    },
    {
        title: "Ghost SMP",
        desc: "Servidor Survival optimizado con mecánicas únicas.",
        tech: "PaperMC, LuckPerms"
    }
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <small style="color: #c4b5fd; display:block; margin-top:10px;">${project.tech}</small>
        `;
        container.appendChild(card);
    });
}

function sendMessage() {
    const name = document.getElementById('name').value;
    if (name.trim() !== '') {
        alert(`👻 ¡Mensaje recibido desde las sombras, ${name}! Te responderé pronto.`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("👻 El fantasma necesita saber tu nombre...");
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
