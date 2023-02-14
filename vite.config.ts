import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'

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
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
    Icons({
      defaultClass: 'unplugin-icon',
      compiler: 'jsx',
      jsx: 'react',
    }),

    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
      dts: './src/auto-imports.d.ts',
      imports: [
        'react',
        {
          react: ['Fragment', 'createContext', 'Suspense'],
        },
        {
          valtio: ['proxy', 'useSnapshot', 'subscribe'],
        },
        {
          'valtio/utils': ['watch', 'derive'],
        },
        {
          '@emotion/css': ['cx'],
        },
        {
          '@/utils/_.utils': ['_'],
        },
      ],
      dirs: ['./src/shared-components/Utils/*'],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
