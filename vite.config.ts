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
          // 将字体文件放在 fonts/ 目录下
          if (assetInfo.name && /\.(woff2?|eot|ttf|otf|svg)$/.test(assetInfo.name)) {
            return "fonts/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
    // 配置资源内联阈值，确保字体文件不被内联
    assetsInlineLimit: 0,
  },
  plugins: [
    // 修复remixicon字体路径的插件
    {
      name: "fix-remixicon-paths",
      generateBundle(options, bundle) {
        // 遍历所有生成的CSS文件
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (chunk.type === "asset" && fileName.endsWith(".css")) {
            let source = chunk.source as string;
            // 修复字体路径：将 /fonts/ 替换为 ../fonts/
            source = source.replace(/url\(\/fonts\//g, "url(../fonts/");
            chunk.source = source;
          }
        }
      },
    },
  ],
});
