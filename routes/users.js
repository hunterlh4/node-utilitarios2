const express = require("express");
const router = express.Router();

const userData = [
  {
    id: 1,
    title: "react",
    type: "frontend",
    slug: "react",
    contenido: [
      {
        id: 1,
        titulo: "Guía completa de React con Hooks",
        descripcion:
          "Introducción a React con ejemplos prácticos usando Hooks.",
        slug: "/guia-completa-de-react-con-hooks",
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
        id: 2,
        titulo: "Estado global con Context API",
        descripcion:
          "Uso de React Context para manejar el estado global de la aplicación.",
        slug: "/uso-de-context-api-en-react",
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
    id: 2,
    title: "angular",
    type: "frontend",
    slug: "angular",
    contenido: [
      {
        id: 1,
        titulo: "Introducción a Angular y componentes",
        descripcion: "Crea componentes reutilizables en Angular paso a paso.",
        slug: "/guias/angular/componentes-basicos",
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
    id: 3,
    title: "vue",
    type: "frontend",
    slug: "vue",
    contenido: [
      {
        id: "1",
        titulo: "Primeros pasos con Vue 3",
        descripcion: "Cómo empezar a usar Vue.js 3 con Composition API.",
        slug: "/guias/vue/vue3-intro",
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
    id: 4,
    title: "prisma",
    type: "orm",
    slug: "prisma",
    contenido: [
      {
        id: 1,
        titulo: "Primeros pasos con Prisma ORM",
        descripcion: "Cómo configurar Prisma en un proyecto Node.js",
        slug: "/guias/prisma/primeros-pasos",
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
    id: 5,
    title: "node",
    type: "frontend",
    slug: "node",
    contenido: [
      {
        id: 1,
        titulo: "Servidor básico con Express.js",
        descripcion: "Aprende a levantar un servidor con Node y Express.",
        slug: "/guias/node/express-basico",
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
    id: 6,
    title: "typescript",
    type: "frontend",
    slug: "typescript",
    contenido: [
      {
        id: "1",
        titulo: "Fundamentos de TypeScript",
        descripcion: "Tipos, interfaces y clases en TypeScript.",
        slug: "/guias/typescript/fundamentos",
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
    id: 7,
    title: "csharp",
    type: "backend",
    slug: "csharp",
    contenido: []
  },
  {
    id: 8,
    title: "go",
    type: "backend",
    slug: "go",
    contenido: []
  },

  {
    id: 9,
    title: "sql",
    type: "base de datos",
    slug: "sql",
    contenido: []
  },
  {
    id: 10,
    title: "ui/ux",
    type: "diseño",
    slug: "uiux",
    contenido: []
  },
  {
    id: 11,
    title: "tailwind",
    type: "frontend",
    slug: "tailwind",
    contenido: []
  },
  {
    id: 12,
    title: "herramientas",
    type: "utilidades",
    slug: "herramientas",
    contenido: []
  },
  {
    id: 13,
    title: "nextjs",
    type: "fullstack",
    slug: "nextjs",
    contenido: []
  },
  {
    id: 14,
    title: "nestjs",
    type: "backend",
    slug: "nestjs",
    contenido: []
  },
  {
    id: 15,
    title: "flutter",
    type: "mobile",
    slug: "flutter",
    contenido: []
  },
  {
    id: 16,
    title: "react native",
    type: "mobile",
    slug: "react-native",
    contenido: []
  },
  {
    id: 17,
    title: "otros",
    type: "utilidades",
    slug: "otros",
    contenido: []
  }
];

router.get("/users", (req, res) => {
  res.send(userData);
});

module.exports = router;
