// Archivo: script.js

// 1. Funcionalidad de Smooth Scroll (Desplazamiento Suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el salto instantáneo por defecto

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Desplaza suavemente hasta el elemento objetivo
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Funcionalidad del Menú Móvil (Toggle)
// NOTA: Esta parte requiere que actualices ligeramente tu HTML y CSS para que funcione la visibilidad.
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('main-nav');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        // Añade o quita la clase 'active' para mostrar/ocultar el menú
        navMenu.classList.toggle('active');
    });
}
