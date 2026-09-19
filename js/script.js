// ==========================================
// PANTALLA DE CARGA CON MÚSICA
// ==========================================
window.addEventListener('load', () => {
    const music = document.getElementById('background-music');
    
    // Ocultar pantalla de carga y reproducir música automáticamente
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
        
        // Iniciar efecto de escritura después de ocultar la pantalla de carga
        setTimeout(() => {
            initTypingEffect();
        }, 500);
        
        // Reproducir música automáticamente cuando termina la carga
        if (music) {
            music.volume = 0.25; // Volumen al 25%
            music.play()
                .then(() => {
                    console.log('%c🎵 Música de Minecraft reproduciendo', 'color: #5cb85c; font-size: 14px; font-weight: bold;');
                })
                .catch(e => {
                    console.log('%c⚠️ El navegador bloqueó el audio automático. Interactúa con la página.', 'color: #ffd700; font-size: 14px;');
                    // Si falla, intentar con cualquier interacción
                    const startMusic = () => {
                        music.play()
                            .then(() => {
                                console.log('%c🎵 Música activada', 'color: #5cb85c; font-size: 14px;');
                            })
                            .catch(() => {});
                        document.removeEventListener('click', startMusic);
                        document.removeEventListener('keydown', startMusic);
                        document.removeEventListener('scroll', startMusic);
                    };
                    document.addEventListener('click', startMusic, { once: true });
                    document.addEventListener('keydown', startMusic, { once: true });
                    document.addEventListener('scroll', startMusic, { once: true });
                });
        }
    }, 2500); // Muestra "¡Bienvenido al Mundo!" por 2.5 segundos
});

// ==========================================
// EFECTO DE ESCRITURA - MINECRAFT MANAGER
// ==========================================
function initTypingEffect() {
    const texts = [
        'Server Administrator',
        'Manager Team',
        'Communication Expert'
    ];
    const typingText = document.getElementById('typing-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80; // Velocidad rápida

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40; // Borrado más rápido
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80; // Escritura rápida
        }

        // Cuando termina de escribir
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 1500; // Pausa antes de borrar
            isDeleting = true;
        } 
        // Cuando termina de borrar
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 300; // Pausa antes de escribir el siguiente
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ==========================================
// CONTROL DE MÚSICA (BOTÓN OPCIONAL)
// ==========================================
// Puedes agregar un botón para pausar/reanudar la música
function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music) {
        if (music.paused) {
            music.play();
            console.log('▶️ Música reanudada');
        } else {
            music.pause();
            console.log('⏸️ Música pausada');
        }
    }
}

// ==========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// ANIMACIÓN DE BARRAS DE HABILIDADES
// ==========================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 100);
            });
            // Desconectar el observer después de la primera animación
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// ==========================================
// MANEJO DEL FORMULARIO DE CONTACTO
// ==========================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const server = formData.get('server');
        const message = formData.get('message');
        
        // Aquí puedes integrar con un servicio de email como FormSpree o EmailJS
        // Por ahora solo mostramos un mensaje
        let alertMessage = `¡Gracias ${name}! Tu mensaje ha sido recibido.`;
        if (server) {
            alertMessage += `\n\nNos encantaría ayudarte con tu servidor: ${server}`;
        }
        alertMessage += `\n\nTe contactaré pronto a ${email}`;
        
        alert(alertMessage);
        
        // Limpiar el formulario
        this.reset();
        
        // Console log para desarrollo
        console.log('%c📧 Nuevo mensaje recibido:', 'color: #5cb85c; font-size: 16px; font-weight: bold;');
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Servidor:', server || 'No especificado');
        console.log('Mensaje:', message);
    });
}

// ==========================================
// ANIMACIÓN FADE-IN PARA ELEMENTOS
// ==========================================
const fadeElements = document.querySelectorAll('.service-card, .skill-category, .info-item, .project-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ==========================================
// HIGHLIGHT ACTIVO EN NAVEGACIÓN
// ==========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// EFECTO DE PARTÍCULAS EXTRAS (OPCIONAL)
// ==========================================
// Crear partículas flotantes de bloques de Minecraft
function createMinecraftParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleEmojis = ['⛏️', '🪓', '🗡️', '🛡️', '💎', '🪨', '🌲', '🏰'];
    
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% de probabilidad
            const particle = document.createElement('div');
            particle.textContent = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
            particle.style.position = 'absolute';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.fontSize = '2rem';
            particle.style.opacity = '0.3';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            particle.style.transition = 'all 3s linear';
            
            hero.appendChild(particle);
            
            // Animar hacia arriba
            setTimeout(() => {
                particle.style.top = '-10%';
                particle.style.opacity = '0';
            }, 100);
            
            // Eliminar después de la animación
            setTimeout(() => {
                particle.remove();
            }, 3100);
        }
    }, 2000); // Cada 2 segundos
}

// Iniciar partículas (comentado por defecto para mejor rendimiento)
// Descomenta la siguiente línea si quieres partículas flotantes
// createMinecraftParticles();

// ==========================================
// DETECCIÓN DE TEMA OSCURO/CLARO
// ==========================================
// Detectar preferencia del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    console.log('%c🌞 Tema claro detectado, pero este portafolio está optimizado para tema oscuro', 'color: #ffd700;');
}

// ==========================================
// EASTER EGG - COMANDO DE MINECRAFT
// ==========================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.log('%c🎮 ¡CÓDIGO KONAMI ACTIVADO!', 'color: #5cb85c; font-size: 24px; font-weight: bold;');
        console.log('%c/gamemode creative', 'color: #ffd700; font-size: 18px;');
        alert('🎮 ¡Modo Creativo Activado!\n\n/gamemode creative\n/give @p diamond 64');
        
        // Efecto visual
        document.body.style.animation = 'rainbow 2s linear';
    }
});

// Comando secreto en consola
window.minecraft = {
    give: (item, amount = 1) => {
        console.log(`%c/give @p ${item} ${amount}`, 'color: #5cb85c; font-size: 16px;');
        console.log(`%c✅ Has recibido ${amount} ${item}(s)`, 'color: #ffd700; font-size: 14px;');
    },
    gamemode: (mode) => {
        console.log(`%c/gamemode ${mode}`, 'color: #5cb85c; font-size: 16px;');
        console.log(`%c✅ Modo de juego cambiado a ${mode}`, 'color: #ffd700; font-size: 14px;');
    },
    tp: (x, y, z) => {
        console.log(`%c/tp ${x} ${y} ${z}`, 'color: #5cb85c; font-size: 16px;');
        console.log(`%c✅ Teletransportado a ${x}, ${y}, ${z}`, 'color: #ffd700; font-size: 14px;');
    }
};

// ==========================================
// CONSOLE LOG DE BIENVENIDA MINECRAFT
// ==========================================
console.log('%c⛏️ ¡Bienvenido al Portafolio de Kexz! ⛏️', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cGracias por visitar mi portafolio de Minecraft Manager', 'color: #b794f6; font-size: 16px;');
console.log('%c¿Necesitas un manager profesional para tu servidor? ¡Contáctame!', 'color: #7dd3fc; font-size: 14px;');
console.log('%c💡 Tip: Escribe "minecraft.give(\'diamond\', 64)" en la consola', 'color: #c4b5fd; font-size: 12px;');

// ==========================================
// PERFORMANCE MONITOR (OPCIONAL)
// ==========================================
let frameCount = 0;
let fps = 0;
let lastTime = performance.now();

function calculateFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        // Advertir si el FPS es bajo
        if (fps < 30) {
            console.warn(`⚠️ FPS bajo detectado: ${fps} FPS`);
        }
    }
    
    requestAnimationFrame(calculateFPS);
}

// Iniciar monitor de FPS (comentado por defecto)
// calculateFPS();

// ==========================================
// PROTECCIÓN BÁSICA (ANTI INSPECCIONAR)
// ==========================================
// Descomentar si quieres protección básica
/*
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('Click derecho deshabilitado');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        console.log('DevTools bloqueadas');
    }
});
*/