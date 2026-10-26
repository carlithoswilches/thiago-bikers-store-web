import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";

// Sitio 100% estático: `npm run build` genera la carpeta `dist/`.
// React se usa solo en los efectos animados (src/components/animados), que se cargan como "islas" donde hacen falta.
export default defineConfig({
  integrations: [icon(), react()],
  // Permite ver la vista previa desde un túnel público (VS Code "Reenviar puerto" o Cloudflare),
  // para que el cliente la abra en su celular. Sin esto, Astro responde "host no permitido" (403).
  server: {
    allowedHosts: [".devtunnels.ms", ".trycloudflare.com"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
