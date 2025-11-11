import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

// Vite configuration for the SEL-310 lab project.
export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
