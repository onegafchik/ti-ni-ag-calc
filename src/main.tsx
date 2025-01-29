import { createRoot } from "react-dom/client"
import { App } from "@/App"

import { registerSW } from "virtual:pwa-register"

registerSW({ immediate: true })

import "@/index.css"

createRoot(document.querySelector("#root")!).render(<App />)
