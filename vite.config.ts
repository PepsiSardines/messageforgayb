import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Replace __REPO_NAME__ with your repository name (case-sensitive).
// Example: if your repo is github.com/youruser/confetti-invite, set base to '/confetti-invite/'
export default defineConfig({
  plugins: [react()],
  base: '/messageforgayb/'
})
