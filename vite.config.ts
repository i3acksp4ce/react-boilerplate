import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Icons from 'unplugin-icons/vite'

/**
 * path alias
 * https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
 *
 * fix cannot find __dirname
 * https://bobbyhadz.com/blog/typescript-cannot-find-name-dirname
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({
      defaultClass: 'unplugin-icon',
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
