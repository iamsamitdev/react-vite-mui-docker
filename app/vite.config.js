import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, 
    // host: '0.0.0.0',
    strictPort: true,
    port: 5173, 
    // port: 4173,
  }
})
