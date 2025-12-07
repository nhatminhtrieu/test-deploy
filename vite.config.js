import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.REPOSITORY?.split('/').pop()
const base = repoName ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep dev root at / but serve under /<repo>/ on GitHub Pages
  base,
})
