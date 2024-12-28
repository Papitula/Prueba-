let subMenu = document.getElementById('nav_links');
let body = document.body;

// Alternar el menú con la función menu_toggle
function menu_toggle() {
    if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
        document.body.style.overflowY = 'auto';
    } else {
        subMenu.classList.add('show');
        document.body.style.overflowY = 'hidden';
    }
}


// Ocultar el menú al hacer clic en un enlace
let enlaces = subMenu.querySelectorAll('a'); // Selecciona todos los enlaces dentro del subMenu

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        subMenu.classList.remove('show');
        document.body.style.overflowY = 'auto';
    });
});