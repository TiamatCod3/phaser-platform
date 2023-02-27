import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/phaser-platform/',
    server:{
        port:3000
    },
    build: {
        chunkSizeWarningLimit: 1600,
    }
})