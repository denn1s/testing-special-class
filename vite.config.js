import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  resolve: {
    '@components': '/src/components'
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  }
})
