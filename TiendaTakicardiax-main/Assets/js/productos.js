/* Productos */
const productos = [
  {
    id: 1,
    nombre: "Monster Energy Green 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto1.webp",
    descripcion:
      "Monster Energy Green es la bebida energética clásica con un sabor único y refrescante.",
    ingredientes:
      "Agua carbonatada, azúcar, cafeína, taurina, ginseng, vitaminas.",
    especificaciones: "473 ml, 200 mg de cafeína, sin calorías.",
  },
  {
    id: 2,
    nombre: "Monster Ultra Peachy Keen 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto2.webp",
    descripcion:
      "Monster Ultra Peachy Keen tiene un delicioso sabor a durazno tropical, sin azúcar.",
    ingredientes:
      "Agua carbonatada, edulcorantes, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 150 mg de cafeína, sin azúcar.",
  },
  {
    id: 3,
    nombre: "Monster Mango Loco 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto3.webp",
    descripcion:
      "Monster Mango Loco es una explosión de sabor tropical, con un toque único de mango.",
    ingredientes: "Agua carbonatada, azúcar, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 160 mg de cafeína, con azúcar.",
  },
  {
    id: 4,
    nombre: "Monster Ultra Paradise 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto4.webp",
    descripcion:
      "Monster Ultra Paradise es una mezcla tropical exótica, sin azúcar y refrescante.",
    ingredientes:
      "Agua carbonatada, edulcorantes, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 150 mg de cafeína, sin azúcar.",
  },
  {
    id: 5,
    nombre: "Monster Aussie Lemonade 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto5.webp",
    descripcion:
      "Monster Aussie Lemonade tiene un sabor único a limonada australiana, con un toque refrescante.",
    ingredientes:
      "Agua carbonatada, azúcar, cafeína, taurina, limón, vitaminas.",
    especificaciones: "473 ml, 180 mg de cafeína, con azúcar.",
  },
  {
    id: 6,
    nombre: "Monster Ultra sin Calorías 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto6.webp",
    descripcion:
      "Monster Ultra sin Calorías es la opción perfecta para quienes buscan energía sin azúcar.",
    ingredientes:
      "Agua carbonatada, edulcorantes, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 150 mg de cafeína, sin calorías.",
  },
  {
    id: 7,
    nombre: "Monster Energy Zero Sugar Green 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto7.webp",
    descripcion:
      "Monster Energy Zero Sugar Green es una versión sin azúcar del clásico Monster Energy Green.",
    ingredientes:
      "Agua carbonatada, edulcorantes, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 200 mg de cafeína, sin azúcar.",
  },
  {
    id: 8,
    nombre: "Monster Energy Ultra Watermelon 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto8.webp",
    descripcion:
      "Monster Energy Ultra Watermelon es una bebida refrescante con sabor a sandía, sin azúcar.",
    ingredientes:
      "Agua carbonatada, edulcorantes, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 150 mg de cafeína, sin azúcar.",
  },
  {
    id: 9,
    nombre: "Monster Energy Ultra Gold 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto9.webp",
    descripcion:
      "Monster Energy Ultra Gold es una deliciosa bebida energética con un toque tropical de piña.",
    ingredientes:
      "Agua carbonatada, edulcorantes, cafeína, taurina, vitaminas.",
    especificaciones: "473 ml, 150 mg de cafeína, sin azúcar.",
  },
  {
    id: 10,
    nombre: "Monster Ripper Regular 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto10.webp",
    descripcion:
      "Monster Ripper es una bebida energética con sabor afrutado y un toque ácido.",
    ingredientes:
      "Agua carbonatada, azúcar, cafeína, taurina, frutas, vitaminas.",
    especificaciones: "473 ml, 160 mg de cafeína, con azúcar.",
  },
];

const listaProductos = document.getElementById("lista-productos");

if (listaProductos) {
  const mostrarTodos = listaProductos.classList.contains("todos");
  const limite = mostrarTodos ? productos.length : 4;

  for (let i = 0; i < limite; i++) {
    const producto = productos[i];
    const li = document.createElement("li");
    li.innerHTML = `
            <article>
                <a href="../Html/detalle-productos.html?producto=${producto.id}">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <span>Ver Detalles</span>
                </a>
                <p>Precio: $${producto.precio}</p>
                <button class="agregar-item" data-id="${producto.id}" data-name="${producto.nombre}" data-price="${producto.precio}">Agregar al Carrito</button>
            </article>
        `;
    listaProductos.appendChild(li);
  }
}

const detalle = document.getElementById("detalle-producto");
if (detalle) {
  const params = new URLSearchParams(window.location.search);
  const idProducto = parseInt(params.get("producto"));
  const producto = productos.find((p) => p.id === idProducto);

  if (producto) {
    detalle.innerHTML = `
            <article>
                <h2>${producto.nombre}</h2>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <p>Ingredientes: ${producto.ingredientes}</p>
                <p>Especificaciones: ${producto.especificaciones}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="agregar-item" data-id="${producto.id}" data-name="${producto.nombre}" data-price="${producto.precio}">Agregar al Carrito</button>
            </article>
        `;
  } else {
    detalle.innerHTML = "<p>Producto no encontrado.</p>";
  }
}
