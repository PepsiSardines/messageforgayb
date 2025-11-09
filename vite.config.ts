import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  /**
   * GitHub Pages serves the compiled site from a nested path based on the
   * repository name. Using a relative base ("./") keeps the generated asset
   * URLs portable across any hosting setup without requiring environment
   * variables or workflow configuration. During local development we still use
   * the root path so Vite's dev server behaves normally.
   */
  base: command === 'serve' ? '/' : './',
}))
