// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 ADD THIS SECTION BELOW 💡
  server: {
    proxy: {
      // If the browser requests a URL starting with /api...
      '/api': {
        // ...forward that request to the target server (Spring Boot)
        target: 'http://localhost:8080', 
        // This is necessary for proper routing
        changeOrigin: true, 
        // We do NOT need rewrite since your Spring Boot controller 
        // mapping is also /api
      },
    },
  },
})