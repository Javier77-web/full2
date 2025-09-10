// carrito contador
let conteoCarrito = parseInt(localStorage.getItem("conteo_carrito")) || 0;
const elementoConteoCarrito = document.getElementById("carrito-contador");
const listaCarrito = document.querySelector(".lista-carrito");
const elementoTotalCarrito = document.getElementById("total-carrito");
const botonPagar = document.getElementById("pagar");

// carrito contador header
function actualizarConteoCarrito() {
  conteoCarrito = parseInt(localStorage.getItem("conteo_carrito")) || 0;
  if (elementoConteoCarrito) {
    elementoConteoCarrito.textContent = conteoCarrito;
  }
  if (listaCarrito) {
    renderizarCarrito();
  }
}

function agregarAlCarrito(idProducto, nombreProducto, precioProducto) {
  conteoCarrito++;
  localStorage.setItem("conteo_carrito", conteoCarrito);
  localStorage.setItem(`item_carrito_${conteoCarrito}_id`, idProducto);
  localStorage.setItem(`item_carrito_${conteoCarrito}_nombre`, nombreProducto);
  localStorage.setItem(`item_carrito_${conteoCarrito}_precio`, precioProducto);
  localStorage.setItem(`item_carrito_${conteoCarrito}_cantidad`, "1");
  actualizarConteoCarrito();
  alert("Producto agregado al carrito");
}

function renderizarCarrito() {
  if (listaCarrito) {
    listaCarrito.innerHTML = "";
    let total = 0;
    for (let i = 1; i <= conteoCarrito; i++) {
      const idItem = localStorage.getItem(`item_carrito_${i}_id`);
      const nombreItem = localStorage.getItem(`item_carrito_${i}_nombre`);
      const precioItem =
        parseInt(localStorage.getItem(`item_carrito_${i}_precio`)) || 0;
      let cantidadItem =
        parseInt(localStorage.getItem(`item_carrito_${i}_cantidad`)) || 0;

      if (idItem) {
        const li = document.createElement("li");
        li.innerHTML = `
                    ${nombreItem} - $${precioItem} x <span class="cantidad-item">${cantidadItem}</span>
                    <button class="eliminar-item" data-indice="${i}">-</button>
                    <button class="agregar-item" data-indice="${i}">+</button>
                `;
        listaCarrito.appendChild(li);
        total += precioItem * cantidadItem;
      }
    }
    if (elementoTotalCarrito) {
      elementoTotalCarrito.textContent = total;
    }
  }
}

//simula pago
function procesarPago() {
  if (conteoCarrito > 0) {
    alert("Gracias por su compra");
    for (let i = 1; i <= conteoCarrito; i++) {
      localStorage.removeItem(`item_carrito_${i}_id`);
      localStorage.removeItem(`item_carrito_${i}_nombre`);
      localStorage.removeItem(`item_carrito_${i}_precio`);
      localStorage.removeItem(`item_carrito_${i}_cantidad`);
    }
    localStorage.setItem("conteo_carrito", "0");
    conteoCarrito = 0;
    actualizarConteoCarrito();
  } else {
    alert("El carrito está vacío");
  }
}

// agregar y eliminar
if (listaCarrito) {
  listaCarrito.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar-item")) {
      const indice = e.target.dataset.indice;
      let cantidad =
        parseInt(localStorage.getItem(`item_carrito_${indice}_cantidad`)) || 0;
      cantidad++;
      localStorage.setItem(`item_carrito_${indice}_cantidad`, cantidad);
      actualizarConteoCarrito();
    }
    if (e.target.classList.contains("eliminar-item")) {
      const indice = e.target.dataset.indice;
      let cantidad =
        parseInt(localStorage.getItem(`item_carrito_${indice}_cantidad`)) || 0;
      if (cantidad > 1) {
        cantidad--;
        localStorage.setItem(`item_carrito_${indice}_cantidad`, cantidad);
      } else {
        for (let i = indice; i < conteoCarrito; i++) {
          localStorage.setItem(
            `item_carrito_${i}_id`,
            localStorage.getItem(`item_carrito_${i + 1}_id`)
          );
          localStorage.setItem(
            `item_carrito_${i}_nombre`,
            localStorage.getItem(`item_carrito_${i + 1}_nombre`)
          );
          localStorage.setItem(
            `item_carrito_${i}_precio`,
            localStorage.getItem(`item_carrito_${i + 1}_precio`)
          );
          localStorage.setItem(
            `item_carrito_${i}_cantidad`,
            localStorage.getItem(`item_carrito_${i + 1}_cantidad`)
          );
        }
        localStorage.removeItem(`item_carrito_${conteoCarrito}_id`);
        localStorage.removeItem(`item_carrito_${conteoCarrito}_nombre`);
        localStorage.removeItem(`item_carrito_${conteoCarrito}_precio`);
        localStorage.removeItem(`item_carrito_${conteoCarrito}_cantidad`);
        conteoCarrito--;
        localStorage.setItem("conteo_carrito", conteoCarrito);
      }
      actualizarConteoCarrito();
    }
  });
}

// Vincular botones de añadir
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".agregar-item").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const nombre = e.target.dataset.name;
      const precio = e.target.dataset.price;
      if (id && nombre && precio) {
        agregarAlCarrito(id, nombre, precio);
      } else {
        console.error("Datos del producto no encontrados:", e.target.dataset);
      }
    });
  });
});

if (botonPagar) {
  botonPagar.addEventListener("click", procesarPago);
}

window.addEventListener("load", actualizarConteoCarrito);
