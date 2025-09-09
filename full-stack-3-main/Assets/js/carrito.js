document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("carrito-contenido");
    const totalPrecio = document.getElementById("total-precio");

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    let total = 0;

    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("item-carrito"); // Esto sí coincide con tu CSS
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="80">
            <div>
                <h4>${producto.nombre}</h4>
                <p>Precio: $${producto.precio}</p>
            </div>
        `;
        contenedor.appendChild(div);
        total += producto.precio;
    });

    totalPrecio.textContent = total;

    actualizarContadorCarrito(); // Actualiza el número en el ícono del carrito
});

function continuarComprando() {
    window.location.href = "2productos.html"; // Cambia si tu archivo tiene otra ruta
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    location.reload(); // Recarga la página para limpiar la vista
}

function finalizarCompra() {
    alert("¡Gracias por tu compra!");
    localStorage.removeItem("carrito");
    location.reload();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.querySelector(".carrito-contador");
    if (contador) contador.textContent = carrito.length;
}

