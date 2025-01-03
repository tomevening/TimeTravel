import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const viteConfig = defineViteConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'happy-dom',
  },
});

export default mergeConfig(viteConfig, vitestConfig);

// // https://vite.dev/config/
// export default defineConfig({
//   test: {
//     environment: 'happy-dom',
//   },
//   plugins: [vue(), vueDevTools()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });
