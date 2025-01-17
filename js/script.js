// Función para alternar el menú
function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    if (menu) {
        menu.classList.toggle('active');
    } else {
        console.warn('MenuDropdown no encontrado');
    }
}