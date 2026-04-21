import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[react()],
  server: {
    host: true, // Membuka akses jaringan lokal (Penting untuk Termux/HP)
    port: 5173,
    strictPort: true
  }
})