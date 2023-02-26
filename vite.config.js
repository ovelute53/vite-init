const { defineConfig } = require('vite');
const reactPlugin = require('@vitejs/plugin-react');

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [reactPlugin()],
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});