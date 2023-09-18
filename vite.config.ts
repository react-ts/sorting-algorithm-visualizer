import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";
import { jsPWAManifest } from "./vite.pwa.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(jsPWAManifest)],
  build: {
    outDir: './dist/build',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@hoc': path.resolve(__dirname, 'src', 'lib', 'hoc'),
      '@hooks': path.resolve(__dirname, 'src', 'lib', 'hooks'),
      '@components': path.resolve(__dirname, 'src', 'lib', 'components')
    }
  }
})
