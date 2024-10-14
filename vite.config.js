import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Seller/',
  plugins: [react()],
  optimizeDeps: {
    include: ['recharts'],  // Force Vite to optimize recharts on startup
  },
})
