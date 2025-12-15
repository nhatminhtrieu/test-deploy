/* eslint-env node */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo =
  process.env.GITHUB_REPOSITORY?.split('/').pop() ??
  process.env.REPOSITORY?.split('/').pop()

const isUserPage = repo && repo.endsWith('.github.io')
const base = isUserPage ? '/' : repo ? `/${repo}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})