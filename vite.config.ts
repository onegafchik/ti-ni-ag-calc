import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa"
import path from "path"

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  workbox: {
    globPatterns: ["**/*.{html,css,js,ico,png}"]
  },
  manifest: {
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      { purpose: "maskable", sizes: "512x512", src: "icon512_maskable.png", type: "image/png" },
      { purpose: "any", sizes: "512x512", src: "icon512_rounded.png", type: "image/png" }
    ],
    orientation: "portrait",
    display: "standalone",
    lang: "ru-RU",
    name: "TiNiAgCalc",
    short_name: "TiNiAgCalc"
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  base: "/ti-ni-ag-calc"
})
