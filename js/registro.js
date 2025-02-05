// Inicializar Supabase con la URL y clave pública (anon key) de tu proyecto
const supabase = window.supabase.createClient(
    'https://myogyntaazlscnxcljqi.supabase.co', // Reemplaza con la URL de tu proyecto en Supabase
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15b2d5bnRhYXpsc2NueGNsanFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2NTgyNDksImV4cCI6MjA1NDIzNDI0OX0.krfhlpVff0PZnB7EH3KwRx4aO_5rmrRRQRBlQkmRNYg' // Reemplaza con tu clave pública (anon key)
  );
  
  // Escuchar el envío del formulario de registro
  document.getElementById('registroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Obtener y limpiar los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('contraseña').value; // Conservamos la contraseña tal cual
    const telefono = document.getElementById('telefono').value.trim();
    const rol = document.getElementById('rol').value; // Valor "user" por defecto
  
    // Registrar el usuario en Supabase Auth
    const { data, error } = await supabase.auth.signUp(
      {
        email: email,
        password: contraseña,
      },
      {
        data: {
          nombre: nombre
        }
      }
    );
  
    if (error) {
      console.error('Error en el registro (Auth):', error);
      alert('Error al registrarse: ' + error.message);
      return;
    }
  
    // Insertar los datos adicionales en la tabla "usuarios"
    // No es necesario enviar el campo "user_id", ya que es autogenerado.
    const { error: insertError } = await supabase
      .from('usuarios')
      .insert([
        {
          nombre: nombre,
          email: email,
          contraseña: contraseña,  // Nota: almacenar contraseñas en texto plano es inseguro.
          rol: rol,
          telefono: telefono,
        },
      ]);
  
    if (insertError) {
      console.error('Error al insertar en la tabla usuarios:', insertError);
      alert('Error al guardar los datos en la tabla usuarios: ' + insertError.message);
      return;
    }
  
    alert('Registro exitoso. Por favor, revisa tu correo para verificar tu cuenta.');
    document.getElementById('registroForm').reset();
  });
  