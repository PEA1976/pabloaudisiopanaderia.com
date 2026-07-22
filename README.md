# Landing page — ebooks de panadería y pastelería

Landing page simple en HTML, CSS y JS puro (sin frameworks), lista para publicar
en GitHub Pages. No necesita servidor ni build: son 3 archivos.

## Estructura

```
index.html      → contenido de la página
style.css       → estilos
script.js       → menú mobile, animaciones y envío del formulario
assets/         → fotos e imágenes
```

## 1. Personalizar el contenido

Abrí `index.html` y reemplazá:

- El nombre "Ana Horneando" por el tuyo/tu marca (aparece en el menú, el `<title>` y el footer).
- Los textos de la sección "Sobre mí" y del hero por tu propia historia.
- Los datos de los ebooks (título, descripción, qué incluye, precio) en la sección `#ebooks`.
- El link de Instagram y el email del footer.

## 2. Poner tus imágenes reales

Reemplazá estos archivos dentro de `assets/` **con el mismo nombre**, así no
hay que tocar el HTML:

- `assets/foto-perfil.jpg` → tu foto
- `assets/ebook-panaderia.jpg` → portada del primer ebook
- `assets/ebook-pasteleria.jpg` → portada del segundo ebook

Si preferís otro nombre de archivo, actualizá el `src` correspondiente en `index.html`.
Mientras no subas las fotos reales, la página muestra automáticamente un placeholder
(no se rompe).

## 3. Configurar el formulario de contacto (importante)

El formulario usa [FormSubmit](https://formsubmit.co/), un servicio gratuito
que reenvía los mensajes del formulario a tu email, sin necesidad de programar
un backend. Es 100% compatible con GitHub Pages (sitio estático).

Pasos:

1. En `script.js`, buscá esta línea:

   ```js
   const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tu-email@ejemplo.com';
   ```

   y reemplazá `tu-email@ejemplo.com` por tu email real.

2. También reemplazá el email en el link del footer, en `index.html`:

   ```html
   <a href="mailto:tu-email@ejemplo.com">Email</a>
   ```

3. La **primera vez** que alguien complete el formulario en la página publicada,
   FormSubmit te va a mandar un email pidiéndote que confirmes esa dirección
   (un único clic). Hasta que confirmes, los envíos no van a llegar. Podés
   probarlo vos mismo/a primero completando el formulario.

4. (Opcional) FormSubmit permite desactivar su captcha o agregar copia
   automática al usuario; para eso hay que crear una cuenta gratuita en
   formsubmit.co y usar tu "form ID" en vez del email directo.

## 4. Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub y subí estos archivos (`index.html`,
   `style.css`, `script.js`, la carpeta `assets/`).

   ```bash
   git init
   git add .
   git commit -m "Landing page ebooks"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from
   a branch"**, elegí la rama `main` y la carpeta `/ (root)`. Guardá.

3. En un par de minutos la página va a estar publicada en:
   `https://TU-USUARIO.github.io/TU-REPO/`

## Notas

- La página es totalmente responsive (mobile, tablet, desktop).
- Respeta `prefers-reduced-motion` para quienes desactivan animaciones.
- No usa ninguna librería externa, solo Google Fonts (Fraunces, Work Sans, Space Mono).
