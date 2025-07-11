# Sky Theme 技术栈演示

一个基于现代前端技术栈的 Halo 2.0 主题开发模板，集成了 Vite、Tailwind CSS、DaisyUI、Alpine.js 等主流工具，开箱即用，适合快速开发和二次定制。

## 技术栈与依赖

### 核心依赖
- **Halo**: 2.21+ (requires)
- **Java**: 21+ (运行环境)
- **Node.js**: 20+ (开发环境)
- **pnpm**: 10.6.5 (包管理器)

### 前端框架与工具
- **Vite**: ^7.0.3 (构建工具)
- **TypeScript**: ^5.8.3 (类型系统)
- **Alpine.js**: ^3.14.9 (轻量级JS框架)

### 样式框架
- **Tailwind CSS**: ^4.1.11 (原子化CSS)
- **DaisyUI**: ^5.0.46 (UI组件库)
- **@tailwindcss/typography**: ^0.5.16 (排版插件)
- **PostCSS**: ^8.5.6 (CSS处理器)
- **Autoprefixer**: ^10.4.21 (CSS前缀)
- **postcss.config.cjs**: PostCSS 配置文件

### 图标与字体
- **Iconify**: 使用@iconify/tailwind方案，支持100+图标集的按需加载，并通过@iconify/json引入所有开源图标集

### 后端模板
- **Thymeleaf**: 3.0.12.RELEASE (服务端模板引擎)

### 开发工具
- **ESLint**: ^9.30.1 (代码检查)
- **Prettier**: ^3.6.2 (代码格式化)
- **Husky**: ^9.1.7 (Git钩子)
- **lint-staged**: ^16.1.2 (暂存区检查)

### Halo专用工具
- **@halo-dev/theme-package-cli**: ^1.0.0 (主题打包工具)

## 开发规范

### 代码风格
- 使用 Prettier 进行代码格式化，配置：
  - printWidth: 120
  - tabWidth: 2
  - useTabs: false
  - endOfLine: "lf"
- 集成 prettier-plugin-tailwindcss 自动排序 Tailwind 类名

### TypeScript 配置
- target: ESNext
- 启用严格模式 (strict: true)
- 支持 DOM 和 ESNext 库
- 启用源码映射 (sourceMap: true)

### 构建配置
- 输出目录: `templates/assets/`
- JS文件: `js/[name].js`
- CSS文件: `css/[name].css`
- 字体文件: `fonts/[name][extname]`
- 禁用资源内联 (assetsInlineLimit: 0)

## 依赖用法示例

### 1. Vite
- 用于本地开发、热更新和生产构建。
- 配置见 `vite.config.ts`，静态资源输出到 `templates/assets/`。

### 2. Tailwind CSS
- 所有样式均可直接使用 Tailwind 原子类。

- 示例：
  ```html
  <div class="bg-primary text-primary-content p-4 rounded">Primary 区块</div>
  
### 3. DaisyUI
- 直接在 HTML 中使用 DaisyUI 组件类，如 `btn`、`alert`、`badge` 等。
- 支持多主题切换。
- 示例：
  ```html
  <button class="btn btn-primary">按钮</button>
  <span class="badge badge-success">徽章</span>
  ```

### 4. Alpine.js
- 通过 `x-data`、`x-init`、`x-text` 等指令实现响应式交互。
- 示例：
  ```html
  <div x-data="{ isDark: false }" x-init="isDark = document.documentElement.getAttribute('data-theme') === 'dark'" @click="isDark = !isDark; document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')">
    <span x-text="isDark ? '深色模式' : '浅色模式'"></span>
  </div>
  ```
## 目录结构

- `src/`：前端源码（JS、CSS）
- `templates/`：主题模板（Thymeleaf 片段、页面）
- `templates/assets/`：构建后静态资源（JS、CSS、字体等）
- 其他配置文件：`vite.config.ts`、`theme.yaml` 等
## 开发命令
- `pnpm dev`: 开发模式（监听文件变化）
- `pnpm build`: 完整构建并打包主题
- `pnpm build-only`: 仅构建不打包
- `pnpm lint`: ESLint代码检查
- `pnpm prettier`: Prettier代码格式化

## 注意事项
- 主题版本: 1.0.0
- 许可证: GPL-3.0
- 构建产物会自动输出到 `templates/assets/` 目录
- 使用 `pnpm build` 命令可一键打包为 Halo 可安装的 zip 文件
- 打包的文件在`dist`下
- 项目结构与 Halo 2.21+ 要求保持一致
- Git 提交前会自动运行 lint-staged 检查代码格式
