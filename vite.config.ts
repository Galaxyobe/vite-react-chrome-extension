import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import { resolve } from 'path'

import * as manifest from './manifest.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    }
  },
  plugins: [
    react({
      jsxRuntime: 'classic'
    }),
    crx({ manifest }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        options: 'src/options/index.html',
      },
    },
  }
})