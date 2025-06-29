const express = require("express");
const router = express.Router();

let article = [
  {
    id: "1",
    title: "react",
    type: "frontend",
    slug: "react",
    icon: "https://example.com/icons/react.png",
    contenido: [
      {
        id: "1",
        titulo: "Guía completa de React con Hooks",
        descripcion:
          "Introducción a React con ejemplos prácticos usando Hooks.",
        uri: "/guia-completa-de-react-con-hooks",
        contenido: "Aquí va el contenido extenso o resumido de la guía...",
        tags: ["react", "hooks", "javascript"],
        fecha: "2023-10-01 12:00:00",
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
        id: "2",
        titulo: "Estado global con Context API",
        descripcion:
          "Uso de React Context para manejar el estado global de la aplicación.",
        uri: "/uso-de-context-api-en-react",
        contenido: "Explicación de cómo funciona Context...",
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
    id: "2",
    title: "angular",
    type: "frontend",
    slug: "angular",
    icon: "https://example.com/icons/react.png",
    contenido: [
      {
        id: "1",
        titulo: "Introducción a Angular y componentes",
        descripcion: "Crea componentes reutilizables en Angular paso a paso.",
        uri: "/guias/angular/componentes-basicos",
        contenido:
          "Angular es un framework para crear SPA utilizando TypeScript...",
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
    id: "3",
    title: "vue",
    type: "frontend",
    slug: "vue",
    icon: "https://example.com/icons/react.png",
    contenido: [
      {
        id: "1",
        titulo: "Primeros pasos con Vue 3",
        descripcion: "Cómo empezar a usar Vue.js 3 con Composition API.",
        uri: "/guias/vue/vue3-intro",
        contenido:
          "Vue 3 utiliza una nueva Composition API que mejora la organización del código...",
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
    id: "4",
    title: "prisma",
    type: "orm",
    slug: "prisma",
    icon: "https://example.com/icons/react.png",
    contenido: [
      {
        id: "1",
        titulo: "Primeros pasos con Prisma ORM",
        descripcion: "Cómo configurar Prisma en un proyecto Node.js",
        uri: "/guias/prisma/primeros-pasos",
        contenido: "Comienza inicializando el esquema con `npx prisma init`...",
        tags: ["prisma", "orm", "node"],
        fecha: "2024-02-15 16:00:00",
        links: [
          {
            name: "Documentación oficial",
            url: "https://www.prisma.io/docs"
          }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "node",
    type: "frontend",
    slug: "node",
    icon: "https://example.com/icons/react.png",
    contenido: [
      {
        id: "1",
        titulo: "Servidor básico con Express.js",
        descripcion: "Aprende a levantar un servidor con Node y Express.",
        uri: "/guias/node/express-basico",
        contenido:
          "Express es un framework minimalista para Node.js que facilita la creación de APIs...",
        tags: ["node", "express", "api"],
        fecha: "2024-04-01 09:00:00",
        links: [
          {
            name: "Guía Express",
            url: "https://expressjs.com/en/starter/hello-world.html"
          }
        ]
      }
    ]
  },
  {
    id: "6",
    title: "typescript",
    type: "frontend",
    slug: "typescript",
    icon: "https://example.com/icons/react.png",
    contenido: [
      {
        id: "1",
        titulo: "Fundamentos de TypeScript",
        descripcion: "Tipos, interfaces y clases en TypeScript.",
        uri: "/guias/typescript/fundamentos",
        contenido:
          "TypeScript extiende JavaScript con tipado estático opcional...",
        tags: ["typescript", "tipado", "clases", "interfaces"],
        fecha: "2024-05-12 14:20:00",
        links: [
          {
            name: "Documentación oficial",
            url: "https://www.typescriptlang.org/docs/"
          }
        ]
      }
    ]
  },

  {
    id: "7",
    title: "csharp",
    type: "backend",
    slug: "csharp",
    icon: "https://example.com/icons/csharp.png",
    contenido: []
  },
  {
    id: "8",
    title: "go",
    type: "backend",
    slug: "go",
    icon: "https://example.com/icons/go.png",
    contenido: []
  },

  {
    id: "9",
    title: "sql",
    type: "base de datos",
    slug: "sql",
    icon: "https://example.com/icons/sql.png",
    contenido: []
  },
  {
    id: "10",
    title: "ui/ux",
    type: "diseño",
    slug: "uiux",
    icon: "https://example.com/icons/uiux.png",
    contenido: []
  },
  {
    id: "11",
    title: "tailwind",
    type: "frontend",
    slug: "tailwind",
    icon: "https://example.com/icons/tailwind.png",
    contenido: []
  },
  {
    id: "12",
    title: "herramientas",
    type: "utilidades",
    slug: "herramientas",
    icon: "https://example.com/icons/sql.png",
    contenido: []
  },
  {
    id: "13",
    title: "nextjs",
    type: "fullstack",
    slug: "nextjs",
    icon: "https://example.com/icons/nextjs.png",
    contenido: []
  },
  {
    id: "14",
    title: "nestjs",
    type: "backend",
    slug: "nestjs",
    icon: "https://example.com/icons/nestjs.png",
    contenido: []
  },
  {
    id: "15",
    title: "flutter",
    type: "mobile",
    slug: "flutter",
    icon: "https://example.com/icons/flutter.png",
    contenido: []
  },
  {
    id: "16",
    title: "react native",
    type: "mobile",
    slug: "react-native",
    icon: "https://example.com/icons/react-native.png",
    contenido: []
  },
  {
    id: "17",
    title: "otros",
    type: "utilidades",
    slug: "otros",
    icon: "https://example.com/icons/sql.png",
    contenido: []
  }
];

const getArticle = (req, res) => {
  res.json(article);
};

const getArticleById = (req, res) => {
  const result = article.find((b) => b.id === req.params.id);
  if (!result) return res.status(404).json({ error: "articulo no encontrada" });
  res.json(result.contenido);
};

const getArticleBySlug = (req, res) => {
  const result = article.find((b) => b.slug === req.params.slug);
  if (!result)
    return res.status(404).json({ error: "articulo por slug no encontrada" });
  res.json(result.contenido);
};

const getArticlesByCategory = (req, res) => {
  const categories = article.map(({ id, title, type, icon }) => ({
    id,
    title,
    type,
    icon
  }));
  res.json(categories);
};

const getarticleByCategorySlug = (req, res) => {
  const slug = req.params.category;
  const result = article.filter((b) => b.slug === slug);
  if (result.length === 0)
    return res
      .status(404)
      .json({ error: "No se encontraron artículos en esta categoría" });
  res.json(result);
};

module.exports = router;
