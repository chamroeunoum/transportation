import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `${name}/style`,
        }),

    ],
    server: {
        // host: '192.168.1.42'
    }
})