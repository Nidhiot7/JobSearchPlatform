import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit (in KB) as needed
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
