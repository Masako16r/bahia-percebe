

// Texto de "Bahía Percebe"
const kiplingPoem = `
    <p>
        BAHIA PERCEBE BAHIA PERCEBE BAHIA PERCEBE BAHIA PERCEBE<br>
        BAHIA PERCEBE BAHIA PERCEBE BAHIA PERCEBE BAHIA PERCEBE<br>
        BAHIA PERCEBE BAHIA PERCEBE BAHIA PERCEBE BAHIA PERCEBE
    </p>`;

// Insertar el texto en los divs con la clase .text
function insertPoemIntoDivs() {
    const textDivs = document.querySelectorAll('.text');
    textDivs.forEach((div) => {
        div.innerHTML = kiplingPoem;
    });
}

// Llamar a la función al cargar el DOM
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

// Ajustar el tamaño del contenido según el ancho de la ventana
const contentDiv = document.querySelector('.content');
function adjustContentSize() {
    const viewportWidth = window.innerWidth;
    const baseWidth = 1000;
    const scaleFactor = viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
    contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);

// Navegar a las secciones al hacer clic en los puntos
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});








// Poem text
const kiplingPoem = `<p>BAHIA PERCEBE &nbsp &nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE 
BAHIA PERCEBE &nbsp &nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE&nbsp &nbsp   BAHIA PERCEBE </p> `;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
