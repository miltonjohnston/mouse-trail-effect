/* IMPORTS */
import { Particle } from "./Particle.js";

/* CONSTANTS */
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const MIN_PARTICLES = 1;
const MAX_PARTICLES = 10;

/* CANVAS */
const canvas = document.querySelector('.render-canvas');
const ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;


const particles = [];

/* FUNCTIONS */
const clear = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

/* EVENT LISTENERS */
canvas.addEventListener('mousemove', e => {
    for (let i = 0; i < Math.floor(Math.random() * MAX_PARTICLES + MIN_PARTICLES); i++) {
        const particle = new Particle(e.offsetX, e.offsetY);
        particles.push(particle);
    }
});

let lastTime;

const update = t => {
    window.requestAnimationFrame(update);

    if (!lastTime) lastTime = t;

    const deltaT = t - lastTime;

    clear();
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].Update(deltaT * 0.005);

        if (particles[i]._r <= 0) {
            particles.splice(i, 1);
            continue;
        }

        ctx.fillStyle = particles[i]._c;

        ctx.beginPath();
        ctx.arc(particles[i]._x, particles[i]._y, particles[i]._r, 0, Math.PI * 2);
        ctx.fill();
    }

    lastTime = t;
}

window.requestAnimationFrame(update);