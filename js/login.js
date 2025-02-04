document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Obtenemos los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Hacemos la solicitud GET con los parámetros email y password
        const response = await fetch(`http://localhost:3000/api/usuarios?email=${email}&contraseña=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            // Si la respuesta es exitosa, el login es correcto
            alert('Bienvenido, ' + data.nombre);
            // Redirigir a una página protegida o dashboard
            window.location.href = 'Index.html';  // Ajusta a tu página
        } else {
            // Si hay un error, mostramos un mensaje
            document.getElementById('errorMessage').style.display = 'block';
        }
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
        // Si hay algún problema con la solicitud
        document.getElementById('errorMessage').style.display = 'block';
    }
});

