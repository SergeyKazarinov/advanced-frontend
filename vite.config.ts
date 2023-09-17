import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ],
        },
      },
    }),
    federation({
      name: 'todo-app',
      remotes: {
        microfrontend: 'http://localhost:4174/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@app', replacement: '/src/app' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@widgets', replacement: '/src/widgets' },
      { find: '@features', replacement: '/src/features' },
      { find: '@entities', replacement: '/src/entities' },
      { find: '@shared', replacement: '/src/shared' },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
