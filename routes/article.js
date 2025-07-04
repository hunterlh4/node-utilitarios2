const express = require("express");
const router = express.Router();

let article = [
  {
    id: 1,
    title: "react",
    type: "frontend",
    slug: "react",
    publicacion: [
      {
        id: 1,
        titulo: "Guía completa de React con Hooks",
        descripcion:
          "Introducción a React con ejemplos prácticos usando Hooks.",
        slug: "/guia-completa-de-react-con-hooks",
        contenido: [
          {
            tipo: "titulo",
            texto: "¿Qué es React?"
          },
          {
            tipo: "parrafo",
            texto:
              "React es una biblioteca de JavaScript para construir interfaces..."
          },
          {
            tipo: "codigo",
            lenguaje: "js",
            texto: `const [count, setCount] = useState(0)`
          },
          {
            tipo: "imagen",
            url: "https://example.com/react-diagrama.png",
            alt: "Diagrama de componentes"
          }
        ],
        tags: ["react", "hooks", "javascript"],
        fecha: "2023-10-01 12:00:00",
        author: "Juan Pérez",
        authorSlug: "juan-perez",
        authorImage: "https://example.com/juan-perez.jpg",
        links: [
          {
            name: "Documentación oficial",
            url: "https://reactjs.org/docs/hooks-intro.html"
          },
          {
            name: "Repositorio GitHub",
            url: "https://github.com/facebook/react"
          }
        ]
      },
      {
        id: 2,
        titulo: "Estado global con Context API",
        descripcion:
          "Uso de React Context para manejar el estado global de la aplicación.",
        slug: "/uso-de-context-api-en-react",
        contenido: "Explicación de cómo funciona Context...",
        author: "Juan Pérez",
        authorSlug: "juan-perez",
        authorImage: "https://example.com/juan-perez.jpg",
        tags: ["react", "estado", "context"],
        fecha: "2023-11-10 08:45:00",
        links: [
          {
            name: "Ejemplo práctico",
            url: "https://example.com/context-ejemplo"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "angular",
    type: "frontend",
    slug: "angular",
    publicacion: [
      {
        id: 1,
        titulo: "Introducción a Angular y componentes",
        descripcion: "Crea componentes reutilizables en Angular paso a paso.",
        slug: "/guias/angular/componentes-basicos",
        contenido:
          "Angular es un framework para crear SPA utilizando TypeScript...",
        author: "Juan Pérez",
        authorSlug: "juan-perez",
        authorImage: "https://example.com/juan-perez.jpg",
        tags: ["angular", "componentes", "typescript"],
        fecha: "2024-01-05 10:30:00",
        links: [
          {
            name: "Guía oficial de Angular",
            url: "https://angular.io/start"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "vue",
    type: "frontend",
    slug: "vue",
    publicacion: [
      {
        id: "1",
        titulo: "Primeros pasos con Vue 3",
        descripcion: "Cómo empezar a usar Vue.js 3 con Composition API.",
        slug: "/guias/vue/vue3-intro",
        contenido:
          "Vue 3 utiliza una nueva Composition API que mejora la organización del código...",
        author: "Juan Pérez",
        authorSlug: "juan-perez",
        authorImage: "https://example.com/juan-perez.jpg",
        tags: ["vue", "javascript", "composition-api"],
        fecha: "2024-03-10 15:00:00",
        links: [
          {
            name: "Documentación oficial",
            url: "https://vuejs.org/guide/introduction.html"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "prisma",
    type: "orm",
    slug: "prisma",
    publicacion: []
  },
  {
    id: 5,
    title: "node",
    type: "frontend",
    slug: "node",
    publicacion: []
  },
  {
    id: 6,
    title: "typescript",
    type: "frontend",
    slug: "typescript",
    publicacion: []
  },
  {
    id: 7,
    title: "csharp",
    type: "backend",
    slug: "csharp",
    publicacion: []
  },
  {
    id: 8,
    title: "go",
    type: "backend",
    slug: "go",
    publicacion: []
  },

  {
    id: 9,
    title: "sql",
    type: "base de datos",
    slug: "sql",
    publicacion: []
  },
  {
    id: 10,
    title: "ui/ux",
    type: "diseño",
    slug: "uiux",
    publicacion: []
  },
  {
    id: 11,
    title: "tailwind",
    type: "frontend",
    slug: "tailwind",
    publicacion: []
  },
  {
    id: 12,
    title: "herramientas",
    type: "utilidades",
    slug: "herramientas",
    publicacion: []
  },
  {
    id: 13,
    title: "nextjs",
    type: "fullstack",
    slug: "nextjs",
    publicacion: []
  },
  {
    id: 14,
    title: "nestjs",
    type: "backend",
    slug: "nestjs",
    publicacion: []
  },
  {
    id: 15,
    title: "flutter",
    type: "mobile",
    slug: "flutter",
    publicacion: []
  },
  {
    id: 16,
    title: "react native",
    type: "mobile",
    slug: "react-native",
    publicacion: []
  },
  {
    id: 17,
    title: "otros",
    type: "utilidades",
    slug: "otros",
    publicacion: []
  }
];

// Obtener todas las categorías
router.get("/articles/getAllCategory", (req, res) => {
  const categories = article.map(
    ({ id, title, type, icon, slug, publicacion }) => ({
      id,
      title,
      type,
      slug,
      total: publicacion.length,
      icon
    })
  );

  res.status(200).json({
    status: 200,
    message: "Lista de categorías",
    total: categories.length,
    data: categories
  });
});

//  Obtener artículo por Slug (getAllContentArticleByArticleSlug())
router.get("/article/getAllContentArticleByArticleSlug/:slug", (req, res) => {
  const result = article.find((b) => b.slug === req.params.slug);
  if (!result) {
    return res.status(404).json({
      status: 404,
      message: "Artículo por slug no encontrado",
      data: null
    });
  }

  res.status(200).json({
    status: 200,
    message: `publicacion del artículo ${req.params.slug}`,
    total: result.publicacion.length,
    data: result.publicacion
  });
});

// Buscar contenido por slug de contenido interno
router.get("/article/getContentArticleByArticleSlug/:slug", (req, res) => {
  const slugParam = "/" + req.params.slug;

  for (const art of article) {
    const publicaciones = art.publicacion;
    const index = publicaciones.findIndex((c) => c.slug === slugParam);

    if (index !== -1) {
      const actual = publicaciones[index];

      const anterior =
        index > 0
          ? {
              id: publicaciones[index - 1].id,
              titulo: publicaciones[index - 1].titulo,
              slug: publicaciones[index - 1].slug
            }
          : null;

      const siguiente =
        index < publicaciones.length - 1
          ? {
              id: publicaciones[index + 1].id,
              titulo: publicaciones[index + 1].titulo,
              slug: publicaciones[index + 1].slug
            }
          : null;

      return res.status(200).json({
        status: 200,
        message: "publicacion encontrado",
        data: {
          actual,
          anterior,
          siguiente
        }
      });
    }
  }

  return res.status(404).json({
    status: 404,
    message: "publicacion no encontrado para el slug proporcionado",
    data: null
  });
});

router.get("/article/getAllContent", (req, res) => {
  const { page = 1, limit = 10, tag, slug, search, sort = "desc" } = req.query;

  // 1. Juntar todos los contenidos con metadatos de su categoría
  let allContent = article.flatMap((a) =>
    a.publicacion.map((c) => ({
      ...c,
      categoria: a.title,
      categoriaSlug: a.slug
    }))
  );

  // 2. Filtrar por tag
  if (tag) {
    allContent = allContent.filter((c) => c.tags.includes(tag));
  }

  // 3. Filtrar por categoría (slug del artículo)
  if (slug) {
    allContent = allContent.filter((c) => c.categoriaSlug === slug);
  }

  // 4. Buscar por texto (en título, descripción o slug del contenido)
  if (search) {
    const q = search.toLowerCase();
    allContent = allContent.filter(
      (c) =>
        c.titulo.toLowerCase().includes(q) ||
        c.descripcion.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q)
    );
  }

  // 5. Ordenar por fecha
  allContent.sort((a, b) => {
    const fechaA = new Date(a.fecha).getTime();
    const fechaB = new Date(b.fecha).getTime();
    return sort === "asc" ? fechaA - fechaB : fechaB - fechaA;
  });

  // 6. Paginación
  const total = allContent.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginated = allContent.slice(startIndex, startIndex + Number(limit));

  // 7. Respuesta
  res.status(200).json({
    status: 200,
    message: "publicacion global paginado",
    total,
    currentPage: Number(page),
    totalPages,
    data: paginated
  });
});

router.get("/article/author/:authorSlug", (req, res) => {
  const publicaciones = article.flatMap((a) =>
    a.publicacion
      .filter((p) => p.authorSlug === req.params.authorSlug)
      .map((p) => ({
        ...p,
        categoria: a.title,
        categoriaSlug: a.slug
      }))
  );

  res.json({
    status: 200,
    message: `Publicaciones del autor ${req.params.authorSlug}`,
    total: publicaciones.length,
    data: publicaciones
  });
});

router.get("/article/recent", (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  let all = article.flatMap((a) =>
    a.publicacion.map((p) => ({
      ...p,
      categoria: a.title,
      categoriaSlug: a.slug
    }))
  );

  all.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  res.json({
    status: 200,
    message: "Últimas publicaciones",
    data: all.slice(0, limit)
  });
});
// router.get("/article/content/paginate/:slug", (req, res) => {
//   const { slug } = req.params;
//   const page = parseInt(req.query.page) || 1;
//   const limit = 1; // mostramos de a 1 contenido por página

//   const articleFound = article.find((b) => b.slug === slug);
//   if (!articleFound || articleFound.contenido.length === 0) {
//     return res.status(404).json({
//       status: 404,
//       message: "Artículo no encontrado o sin contenido",
//       data: null
//     });
//   }

//   const total = articleFound.contenido.length;
//   const totalPages = Math.ceil(total / limit);

//   if (page < 1 || page > totalPages) {
//     return res.status(400).json({
//       status: 400,
//       message: "Página fuera de rango",
//       data: null
//     });
//   }

//   const startIndex = (page - 1) * limit;
//   const contenidoPage = articleFound.contenido.slice(
//     startIndex,
//     startIndex + limit
//   );

//   res.status(200).json({
//     status: 200,
//     message: "Contenido paginado del artículo",
//     currentPage: page,
//     totalPages,
//     totalItems: total,
//     data: contenidoPage
//   });
// });

// router.get("/article/content/:categoriaSlug/:contenidoSlug", (req, res) => {
//   const { categoriaSlug, contenidoSlug } = req.params;

//   const categoria = article.find((a) => a.slug === categoriaSlug);
//   if (!categoria) {
//     return res.status(404).json({
//       status: 404,
//       message: "Categoría no encontrada",
//       data: null
//     });
//   }

//   const contenido = categoria.contenido.find(
//     (c) => c.slug.replace("/", "") === contenidoSlug
//   );

//   if (!contenido) {
//     return res.status(404).json({
//       status: 404,
//       message: "Contenido no encontrado",
//       data: null
//     });
//   }

//   res.status(200).json({
//     status: 200,
//     message: "Contenido encontrado",
//     data: {
//       categoria: categoria.title,
//       contenido
//     }
//   });
// });

module.exports = router;

// Obtener todos los artículos
// router.get("/articles", (req, res) => {
//   res.status(200).json({
//     status: 200,
//     message: "Lista de artículos",
//     total: article.length,
//     data: article
//   });
// });

// // Obtener artículo por ID
// router.get("/article/:id", (req, res) => {
//   const result = article.find((b) => b.id === req.params.id);
//   if (!result) {
//     return res.status(404).json({
//       status: 404,
//       message: "Artículo no encontrado",
//       data: null
//     });
//   }

//   res.status(200).json({
//     status: 200,
//     message: "Contenido del artículo encontrado",
//     total: result.contenido.length,
//     data: result.contenido
//   });
// });

// // Obtener artículos por categoría (slug)
// router.get("/articles/category/:category", (req, res) => {
//   const slug = req.params.category;
//   const result = article.filter((b) => b.slug === slug);

//   if (result.length === 0) {
//     return res.status(404).json({
//       status: 404,
//       message: "No se encontraron artículos en esta categoría",
//       data: null
//     });
//   }

//   res.status(200).json({
//     status: 200,
//     message: "Artículos por categoría",
//     total: result.length,
//     data: result
//   });
// });
