import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      srcDir: 'src',
      //filename: 'sw.js',
      //strategies: 'injectManifest',
      manifest: {
        name: 'QuantEV',
        theme_color: '#FFFFFF',
        icons: [
          {
            src: 'img/charging_station_192.png',
            sizes: '192x192',
            types: 'image/png',
            purpose: 'any'
          },
          {
            src: 'img/charging_station_512.png',
            sizes: '512x512',
            types: 'image/png',
            purpose: 'any'
          },
          {
            src: 'img/maskable_icon_x192.png',
            sizes: '192x192',
            types: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'img/maskable_icon_x512.png',
            sizes: '512x512',
            types: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'img/charging_station_512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide',
            label: 'QuantEV'
          },
          {
            src: 'img/charging_station_512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'QuantEV'
          }
        ]
      }
    }),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/quantes_restapi/ev',
  build: {
    emptyOutDir: true
    //outDir: '../GitHub/quantes-restapi1/sources/ev_app/dist'
  }
})
