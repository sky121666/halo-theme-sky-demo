import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "templates/assets",
    rollupOptions: {
      input: {
        main: "src/main.js",
      },
      output: {
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
    // 禁用资源内联
    assetsInlineLimit: 0,
  },
  plugins: [],
});
