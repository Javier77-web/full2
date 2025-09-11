const formularioContacto = document.querySelector(".forma-contacto");

if (formularioContacto) {
  formularioContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    let errores = [];

    const nombre = formularioContacto.querySelector(
      'input[name="nombre"]'
    ).value;
    const correo = formularioContacto.querySelector(
      'input[name="correo"]'
    ).value;
    const telefono = formularioContacto.querySelector(
      'input[name="telefono"]'
    ).value;
    const mensaje = formularioContacto.querySelector(
      'textarea[name="mensaje"]'
    ).value;

    const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombrePattern.test(nombre))
      errores.push("El nombre solo puede contener letras y espacios.");
    if (nombre.trim() === "") errores.push("El nombre es obligatorio.");
    if (nombre.length > 100)
      errores.push("El nombre no puede exceder 100 caracteres.");

    const correoPattern =
      /^[\w.-]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (correo.trim() === "") errores.push("El correo es obligatorio.");
    else if (!correoPattern.test(correo))
      errores.push(
        "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com."
      );

    const telPattern = /^9\d{8}$/;
    if (!telPattern.test(telefono))
      errores.push("El teléfono debe tener 9 dígitos y empezar con 9.");

    if (mensaje.trim() === "") errores.push("El mensaje es obligatorio.");

    if (errores.length > 0) {
      alert(errores.join("\n"));
      return;
    }

    // Contador de contactos no hay show xd
    let totalContactos = parseInt(localStorage.getItem("total_contactos")) || 0;
    totalContactos++;
    localStorage.setItem("total_contactos", totalContactos);

    // Guardar contacto individualmente
    localStorage.setItem(`contacto_${totalContactos}_nombre`, nombre);
    localStorage.setItem(`contacto_${totalContactos}_correo`, correo);
    localStorage.setItem(`contacto_${totalContactos}_telefono`, telefono);
    localStorage.setItem(`contacto_${totalContactos}_mensaje`, mensaje);

    alert("Mensaje enviado exitosamente.");
    formularioContacto.reset();
  });
}
