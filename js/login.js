// Inicializar Supabase con la URL y clave pública (anon key) de tu proyecto
const supabase = window.supabase.createClient(
    'https://myogyntaazlscnxcljqi.supabase.co', // URL de tu proyecto en Supabase
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15b2d5bnRhYXpsc2NueGNsanFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2NTgyNDksImV4cCI6MjA1NDIzNDI0OX0.krfhlpVff0PZnB7EH3KwRx4aO_5rmrRRQRBlQkmRNYg' // Reemplaza con tu clave pública (anon key)
);

// Escuchar el envío del formulario de login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtener y limpiar los valores de los campos
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Consultar la tabla "usuarios" para verificar si el correo y la contraseña coinciden
    const { data, error } = await supabase
        .from('usuarios')
        .select('user_id, email, contraseña')  // Seleccionamos los campos necesarios
        .eq('email', email);  // Comparamos con el correo ingresado

    if (error) {
        console.error('Error al consultar la base de datos:', error);
        return;
    }

    if (data.length === 0) {
        // Si no se encuentra el correo, mostramos un error
        document.getElementById('errorMessage').textContent = 'Correo electrónico no registrado.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Verificar si la contraseña ingresada coincide con la almacenada en la base de datos
    const usuario = data[0];  // Suponemos que hay solo un registro con ese correo
    if (usuario.contraseña !== password) {
        // Si la contraseña no coincide, mostramos un error
        document.getElementById('errorMessage').textContent = 'Contraseña incorrecta.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Guardar el estado de inicio de sesión en localStorage
    localStorage.setItem('user_id', usuario.user_id);
    localStorage.setItem('email', usuario.email);

    // Si el correo y la contraseña son correctos, redirigir o mostrar mensaje de éxito
    console.log('Inicio de sesión exitoso');
    window.location.href = 'index.html';  // Redirige a una página de bienvenida
});
