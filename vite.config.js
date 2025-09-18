import { defineConfig } from 'vite'

export default defineConfig({
  base: '/chevp.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000
  }
})