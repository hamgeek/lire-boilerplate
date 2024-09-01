import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, 'resources/ts') }
        ]
      }
});
