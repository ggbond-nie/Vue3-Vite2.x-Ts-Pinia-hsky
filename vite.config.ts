import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
const pathResolve = (dir: string): string => {
    return resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': pathResolve('src'),
            //   'components': pathResolve('./src/components'),
            //   'api': pathResolve('./src/api'),
            //   'assets': pathResolve('./src/assets'),
            //   'utils': pathResolve('./src/utils'),
            //   'router': pathResolve('./src/router'),
            //   'store': pathResolve('./src/store'),
            //   'views': pathResolve('./src/views'),
            //   'static': pathResolve('./public/static')
        },
    },
})
