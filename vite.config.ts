import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'LexicalEditor',
      fileName: 'lexical-editor',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react/jsx-runtime'],
    }
  },
})
