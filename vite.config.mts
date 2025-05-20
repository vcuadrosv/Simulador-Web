// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
    host: true,
    cors: {
      origin: '*',  // Permite solicitudes desde cualquier origen
    },
    allowedHosts: true,
    proxy: {
      '/paraview-web': {
        target: 'http://ec2-18-222-109-125.us-east-2.compute.amazonaws.com:1234',  // Dirección de tu servidor de ParaView Web
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/paraview-web/, ''),
        configure: (proxy) => {
          // Aquí puedes modificar las cabeceras antes de que lleguen a tu frontend
          proxy.on('proxyRes', (proxyRes) => {
            proxyRes.headers['X-Frame-Options'] = 'ALLOWALL';  // Permitir incrustar en un iframe
            proxyRes.headers['Content-Security-Policy'] = "frame-ancestors 'self' http://localhost:3000";  // Permitir solo desde tu frontend
          });
        },
      },
    },
  },
})