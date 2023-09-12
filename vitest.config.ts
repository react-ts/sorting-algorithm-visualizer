import path from "path";
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const vitestConfig = defineConfig({
  test: {
    dir: path.resolve(__dirname),
    name: "App - Unit Testing",
    environment: 'happy-dom',
    reporters: 'verbose',
    setupFiles: [
      `${path.resolve(__dirname, 'tests', 'unit', 'setupTests.ts')}`
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@hoc': path.resolve(__dirname, 'src', 'lib', 'hoc'),
      '@components': path.resolve(__dirname, 'src', 'lib', 'components')
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: './dist/coverage',
      reporter: 'clover',
    },
    include: ['**/tests/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**'
    ]
  }
});

export default mergeConfig(viteConfig, vitestConfig);
