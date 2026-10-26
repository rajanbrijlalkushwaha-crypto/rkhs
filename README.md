# RK Hydrotesting Service — website

React + Vite site.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production files in dist/

## Edit content
All text, phone, email, projects, equipment and staff numbers are in `src/data/site.js`.
Photos are in `public/images/`, logo is `public/rk-logo.png`.

## Hosting
Pages use normal URLs (/about, /projects …). On Netlify/Vercel/cPanel, route all paths to index.html.
Keep the "Photo credits" in the footer — some photos are CC BY / CC BY-SA licensed.
