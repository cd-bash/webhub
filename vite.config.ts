import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.md'], 
  
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.md')) {
            return 'assets/articles/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});