const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
const { readdirSync } = require("fs");

readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>API</title>
      <style>
        body {
         font-family: 'Segoe UI', sans-serif;
          padding: 40px;
          background-color: #f5f5f5;
          color: #333;
        }
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 40px;
        }
        .route-box {
          background-color: white;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 5px solid #4caf50;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
        }
        .title {
           font-size: 20px;
          font-weight: 600;
          color: #222;
          margin-bottom: 5px;
        }
        .method {
          display: inline-block;
          padding: 4px 10px;
          font-size: 13px;
          font-weight: bold;
          color: white;
          background-color: #4caf50;
          border-radius: 4px;
          margin-bottom: 10px;
        }
       .url a {
         display: inline-block;
          color: #007acc;
          font-family: monospace;
          font-size: 14px;
          padding: 6px 10px;
          background-color: #f8f8f8;
        
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
      }

.url a:hover {
  background-color: #e0f7ff;
  border-color: #007acc;
  color: #005a99;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.controller{
    color:rgb(231, 60, 60);
}

.hide{
    display: none ;
}
      </style>
    </head>
    <body>
      <h1> UTILITARIOS</h1>

       <div class="route-box">
        <div class="title">Obtener todas las categorías -> <span class="controller">getAllCategory</span></div>
        <div class="method">GET</div>
         <div class="url"><a href="/articles/getAllCategory"   target="_blank">/articles/getAllCategory</a></div>
      </div>

      <div class="route-box">
        <div class="title">Obtener artículo por Slug {react,tailwind,angular} -> <span class="controller">getAllContentArticleByArticleSlug</span> </div>
        <div class="method">GET</div>
        <div class="url"><a href="/article/getAllContentArticleByArticleSlug/react"   target="_blank">/article/getAllContentArticleByArticleSlug/:slug</a></div>
      </div>

      <div class="route-box">
        <div class="title">Obtener contenido de un articulo por slug {guia-completa-de-react-con-hooks} -> <span class="controller">getContentArticleByArticleSlug</span> </div>
        <div class="method">GET</div>
        <div class="url"><a href="/article/getContentArticleByArticleSlug/guia-completa-de-react-con-hooks"   target="_blank">/article/getContentArticleByArticleSlug/:slug</a></div>
      </div>

       <div class="route-box">
        <div class="title">Obtener contenido de un articulo por slug {guia-completa-de-react-con-hooks} -> <span class="controller">getContentArticleByArticleSlug</span> </div>
        <div class="method">GET</div>
        <div class="url"><a href="/article/getAllContent/guia-completa-de-react-con-hooks"   target="_blank">/article/getAllContent/:slug</a></div>
      </div>
      
      <div class="route-box">
        <div class="title">Obtener todos los contenidos globales paginados con filtros -><span class="controller">getAllContent</span></div>
        <div class="method">GET</div>
        <div class="url"><a href="/article/getAllContent?page=1&limit=10" target="_blank">/article/getAllContent?page=1&limit=10 </a></div>
      </div>

      <!-- Filtrar por tag: react -->
<div class="route-box">
  <div class="title">Filtrar por tag (react)</div>
  <div class="method">GET</div>
  <div class="url">
    <a href="/article/getAllContent?tag=react" target="_blank">
      /article/getAllContent?tag=react
    </a>
  </div>
</div>

<!-- Filtrar por categoría (slug): angular -->
<div class="route-box">
  <div class="title">Filtrar por categoría (angular)</div>
  <div class="method">GET</div>
  <div class="url">
    <a href="/article/getAllContent?slug=angular" target="_blank">
      /article/getAllContent?slug=angular
    </a>
  </div>
</div>

<!-- Búsqueda por palabra clave: "hooks" -->
<div class="route-box">
  <div class="title">Buscar por palabra clave ("hooks")</div>
  <div class="method">GET</div>
  <div class="url">
    <a href="/article/getAllContent?search=hooks" target="_blank">
      /article/getAllContent?search=hooks
    </a>
  </div>
</div>

<!-- Ordenar por fecha ascendente -->
<div class="route-box">
  <div class="title">Ordenar por fecha ascendente</div>
  <div class="method">GET</div>
  <div class="url">
    <a href="/article/getAllContent?sort=asc" target="_blank">
      /article/getAllContent?sort=asc
    </a>
  </div>
</div>

<!-- Combinación de filtros: categoría=react + búsqueda="estado" + paginación -->
<div class="route-box">
  <div class="title">Combinación: react + estado + paginación</div>
  <div class="method">GET</div>
  <div class="url">
    <a href="/article/getAllContent?slug=react&search=estado&page=1&limit=5" target="_blank">
      /article/getAllContent?slug=react&search=estado&page=1&limit=10
    </a>
  </div>
</div>





    </body>
    </html>
  `);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

{
  /* 


  
      <div class="route-box">
        <div class="title">Obtener contenido de un articulo por paginado (slug)</div>
        <div class="method">GET</div>
        <div class="url"><a href="/article/content/paginate/react"   target="_blank">/article/content/paginate/:slug </a></div>
      </div>

      <div class="route-box">
        <div class="title">Obtener contenido de un articulo por paginado (slug)</div>
        <div class="method">GET</div>
        <div class="url"><a href="/article/content/react/guia-completa-de-react-con-hooks"   target="_blank">/article/content/paginate/:slug </a></div>
      </div>
      


 Obtener todos los artículos
  <div class="route-box hide">
<div class="title">Obtener todos los artículos sin paginar</div>
<div class="method">GET</div>
 <div class="url"><a href="/articles"  target="_blank">/articles</a></div>
</div>
 Obtener artículo por ID
<div class="route-box hide">
<div class="title">Obtener artículo por ID</div>
<div class="method">GET</div>
<div class="url"><a href="/article/1"   target="_blank">/article/:id</a></div>
</div> 
Obtener artículos por categoría (slug)

      <div class="route-box">
        <div class="title">Obtener todos los artículos por categoría (slug)</div>
        <div class="method">GET</div>
        <div class="url"><a href="/articles/category/react"   target="_blank">/articles/category/:category</a></div>
      </div>

*/
}
