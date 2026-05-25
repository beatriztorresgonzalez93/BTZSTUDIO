# BTZ Studio — Web

Landing page de **BTZ Studio**, plataforma web y móvil para bodas. Construida con Next.js y lista para desplegar en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Desplegar en Vercel

1. Sube el proyecto a GitHub (o conecta la carpeta directamente en [vercel.com](https://vercel.com)).
2. En Vercel: **Add New Project** → importa el repositorio.
3. Framework: **Next.js** (se detecta solo). Build: `npm run build`, Output: automático.
4. Pulsa **Deploy**.

## Conectar tu dominio comprado

Si el dominio está en **Vercel** (comprado ahí o transferido):

1. Proyecto → **Settings** → **Domains**.
2. Añade tu dominio (ej. `btzstudio.com` y `www.btzstudio.com`).
3. Vercel te muestra los registros DNS si el dominio está en otro proveedor.

Si el dominio está en **otro hosting** (Ionos, GoDaddy, Cloudflare, etc.):

| Objetivo | Tipo | Valor |
|----------|------|--------|
| Dominio raíz (`tudominio.com`) | `A` | `76.76.21.21` |
| Subdominio `www` | `CNAME` | `cname.vercel-dns.com` |

*(IPs de Vercel pueden cambiar; confirma siempre en el panel **Domains** del proyecto.)*

Para **www → raíz** (opcional): en Vercel activa redirección de `www` al dominio principal.

Propagación DNS: suele tardar entre minutos y 48 h.

## Estructura

- `src/app/` — páginas y layout
- `src/components/` — secciones de la landing
- `public/logo.png` — logo BTZ Studio

## Contacto en la web

- Email: beatriztorresgonzalez@gmail.com
- Ubicación: Sevilla, España
