// REGISTRO
const formularioRegistro = document.querySelector(".forma-registro");
if (formularioRegistro) {
  const nombre = document.querySelector('input[name="nombre"]');
  const correo = document.querySelector('input[name="correo"]');
  const confirmarCorreo = document.querySelector(
    'input[name="confirmarCorreo"]'
  );
  const contraseña = document.querySelector('input[name="contraseña"]');
  const confirmarContraseña = document.querySelector(
    'input[name="confirmarContraseña"]'
  );
  const telefono = document.querySelector('input[name="telefono"]');
  const confirmarTelefono = document.querySelector(
    'input[name="confirmarTelefono"]'
  );

  formularioRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    let errores = [];

    const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombrePattern.test(nombre.value))
      errores.push("El nombre solo puede contener letras y espacios.");
    if (nombre.value.trim() === "") errores.push("El nombre es obligatorio.");
    if (nombre.value.length > 100)
      errores.push("El nombre no puede exceder 100 caracteres.");

    const correoPattern =
      /^[\w.-]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (correo.value.trim() === "") errores.push("El correo es obligatorio.");
    else if (!correoPattern.test(correo.value))
      errores.push(
        "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com."
      );
    if (correo.value !== confirmarCorreo.value)
      errores.push("Los correos no coinciden.");

    const contraseñaPattern = /^[A-Za-z0-9]+$/;
    if (contraseña.value.length < 6 || contraseña.value.length > 15)
      errores.push("La contraseña debe tener entre 6 y 15 caracteres.");
    else if (!contraseñaPattern.test(contraseña.value))
      errores.push("La contraseña solo puede contener letras y números. :)");
    if (contraseña.value !== confirmarContraseña.value)
      errores.push("Las contraseñas no coinciden.");

    const telPattern = /^9\d{8}$/;
    if (!telPattern.test(telefono.value))
      errores.push("El teléfono debe tener 9 dígitos y empezar con 9.");
    if (telefono.value !== confirmarTelefono.value)
      errores.push("Los teléfonos no coinciden.");

    if (errores.length > 0) alert(errores.join("\n"));
    else {
      // Contador de usuarios
      let totalUsuarios = parseInt(localStorage.getItem("total_usuarios")) || 0;
      totalUsuarios++;
      localStorage.setItem("total_usuarios", totalUsuarios);

      // Guardar usuario individualmente
      localStorage.setItem(`usuario_${totalUsuarios}_nombre`, nombre.value);
      localStorage.setItem(`usuario_${totalUsuarios}_correo`, correo.value);
      localStorage.setItem(
        `usuario_${totalUsuarios}_contraseña`,
        contraseña.value
      );
      localStorage.setItem(`usuario_${totalUsuarios}_telefono`, telefono.value);

      alert("Registro exitoso :D");
      formularioRegistro.reset();
    }
  });
}

/* INICIO SESIÓN */
const formularioInicio = document.querySelector(".forma-inicio");
if (formularioInicio) {
  const correoInicio = document.querySelector('input[name="correo"]');
  const contraseñaInicio = document.querySelector('input[name="contraseña"]');

  formularioInicio.addEventListener("submit", function (e) {
    e.preventDefault();
    let totalUsuarios = parseInt(localStorage.getItem("total_usuarios")) || 0;
    let usuarioEncontrado = false;
    let nombreUsuario = "";

    for (let i = 1; i <= totalUsuarios; i++) {
      const correoGuardado = localStorage.getItem(`usuario_${i}_correo`);
      const contraseñaGuardada = localStorage.getItem(
        `usuario_${i}_contraseña`
      );
      const nombreGuardado = localStorage.getItem(`usuario_${i}_nombre`);

      if (
        correoGuardado === correoInicio.value &&
        contraseñaGuardada === contraseñaInicio.value
      ) {
        usuarioEncontrado = true;
        nombreUsuario = nombreGuardado;
        break;
      }
    }

    if (usuarioEncontrado) alert(`Hola :D ${nombreUsuario}`);
    else alert("Impostor D:");
    formularioInicio.reset();
  });
}
