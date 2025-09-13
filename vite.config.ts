import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // simulation du navigateur
    setupFiles: "./src/setupTests.ts", // fichier pour setup (jest-dom, etc.)
  },
})
