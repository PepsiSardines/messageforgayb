import { defineConfig } from 'vite'

function normalizeBasePath(input?: string | null): string {
  if (!input) return ''
  return input.trim().replace(/^\/+|\/+$/g, '')
}

export default defineConfig(({ command }) => {
  const envBase = normalizeBasePath(process.env.VITE_BASE_PATH ?? process.env.BASE_PATH ?? null)
  const repoBase = normalizeBasePath(process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? null)
  const resolvedBase = envBase || repoBase
  const basePath = resolvedBase ? `/${resolvedBase}/` : '/'

  return {
    base: command === 'serve' ? '/' : basePath,
  }
})
