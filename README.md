# Arnau Valls Gorchs — Web portfolio

Web estática (HTML + CSS + JS, sin dependencias). Funciona en cualquier hosting.

## Estructura

```
content.mjs        ← TODO el contenido: textos, proyectos, imágenes, email, enlaces
build.mjs          ← genera las páginas a partir de content.mjs
index.html, work/      ← versión en inglés (generada)
es/index.html, es/work/ ← versión en castellano (generada)
ca/index.html, ca/work/ ← versión en catalán (generada)
assets/css/        ← estilos
assets/js/         ← filtros, visor de imágenes, vídeo, animaciones
assets/img/<proyecto>/  ← imágenes (.jpg o .png)
```

## Editar

1. Cambia textos o proyectos en `content.mjs`.
2. Para añadir un proyecto: crea `assets/img/<nombre>/`, pon allí las imágenes y añade un bloque en `projects` (copia uno existente).
3. Regenera las páginas:

```bash
node build.mjs
```

No edites los `.html` a mano: se sobrescriben al regenerar.

## Idiomas

Cada texto traducible se escribe así en `content.mjs`:

```js
L('English text', 'Texto en castellano', 'Text en català')
```

Un texto normal entre comillas (p. ej. `'Figma'`) se usa igual en los tres idiomas.

- El selector EN · ES · CA lleva a la misma página en el otro idioma y recuerda la elección.
- La primera vez que alguien entra en la portada en inglés con el navegador en castellano o catalán, se le lleva a su idioma.
- Cuando tengas dominio, ponlo en `site.url` (p. ej. `'https://arnauvalls.com'`) y regenera: así Google sabe qué página corresponde a cada idioma.

## Ver en local

```bash
python -m http.server 4321
```

y abre http://localhost:4321

## Publicar

Sube la carpeta tal cual (sin `content.mjs`/`build.mjs` si quieres, no hacen falta en el servidor):

- **Netlify Drop** (lo más rápido): arrastra la carpeta a https://app.netlify.com/drop
- **GitHub Pages**: sube la carpeta a un repositorio → Settings → Pages → rama `main`, carpeta `/`
- **Dominio propio** (p. ej. `arnauvalls.com`): se conecta desde Netlify o GitHub Pages.
