const blogs = [
  {
    id: 1,
    imagen: "../Assets/img/blog3.webp",
    titulo: "Beneficios de beber Monster con responsabilidad",
    descripcion:
      "Conoce cómo Monster puede darte energía cuando la necesitas y qué cuidados debes tener.",
  },
  {
    id: 2,
    imagen: "../Assets/img/blog2.webp",
    titulo: "¿Cuál es tu sabor favorito? Variedades de Monster explicadas",
    descripcion:
      "Descubre las diferencias entre los sabores y cuál puede ser ideal para ti.",
  },
  {
    id: 3,
    imagen: "../Assets/img/blog1.webp",
    titulo: "Monster y el deporte: ¿cómo aprovechar su energía?",
    descripcion:
      "Consejos para combinar Monster con tu rutina de entrenamiento de forma segura.",
  },
];

// Mostrar lista-blogs
const listaBlogs = document.querySelector(".lista-blogs");
if (listaBlogs) {
  blogs.forEach((blog) => {
    const article = document.createElement("article");
    article.innerHTML = `
            <h3>${blog.titulo}</h3>
            <p>${blog.descripcion}</p>
            <a href="/html/detalle-blogs.html?blog=${blog.id}">
                <img src="${blog.imagen}" alt="${blog.titulo}">
            </a>
        `;
    listaBlogs.appendChild(article);
  });
}

// Mostrar detalle-blog
const detalleBlog = document.querySelector(".detalle-blog-card");
if (detalleBlog) {
  const params = new URLSearchParams(window.location.search);
  const idBlog = parseInt(params.get("blog"));
  const blog = blogs.find((b) => b.id === idBlog);

  if (blog) {
    document.getElementById("titulo-blog").textContent = blog.titulo;
    document.getElementById("imagen-blog").src = blog.imagen;
    document.getElementById("imagen-blog").alt = blog.titulo;
    document.getElementById("contenido-blog").textContent = blog.descripcion;
  } else {
    detalleBlog.innerHTML = "<p>Blog no encontrado.</p>";
  }
} else {
  console.error(
    "Elemento .detalle-blog-card no encontrado en detalle-blogs.html"
  );
}
