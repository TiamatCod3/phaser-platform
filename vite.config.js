import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/phaser-platform/',
    server:{
        port:3000
    },
    build: {
        assetsInlineLimit: 0,
        chunkSizeWarningLimit: 1600,
    }
})