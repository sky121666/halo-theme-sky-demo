<div align="center">

# 🌌 Sky Theme Demo

**现代化 Halo 2.0 主题开发模板**

*🚀 这是一个专为 Halo 主题开发设计的模板项目，集成现代前端技术栈，开箱即用，适合快速开发和二次定制*

> ⚠️ **注意**: 这是一个开发模板，不是完整的主题。请基于此模板创建您自己的主题项目。

[![Halo Version](https://img.shields.io/badge/Halo-2.21+-blue?style=for-the-badge&logo=halo)](https://halo.run)
[![License](https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge)](LICENSE)
[![Node Version](https://img.shields.io/badge/Node.js-20+-brightgreen?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

[🚀 快速开始](#-快速开始) • [📖 文档](#-技术栈与依赖) • [🎨 演示](#-演示) • [🤝 贡献](#-贡献)

</div>

---

## ✨ 模板特性

### 🛠️ 开发模板优势
- 📋 **完整的项目结构** - 预配置的目录结构和文件组织
- 🔧 **开发环境配置** - 预设的构建工具、代码检查和格式化
- 📚 **最佳实践示例** - 包含常用组件和布局的示例代码
- 🚀 **快速启动** - 一键初始化，立即开始主题开发

### 💻 技术栈特性
- 🎯 **现代化技术栈** - Vite + TypeScript + Tailwind CSS + Alpine.js
- 🎨 **美观的UI组件** - 基于 DaisyUI 的精美组件库
- 🌈 **多主题支持** - 内置多种配色方案，支持深色模式
- 📱 **响应式设计** - 完美适配各种设备尺寸
- ⚡ **极速开发** - 热更新、自动构建、代码检查一应俱全
- 🔧 **高度可定制** - 灵活的配置系统，易于二次开发

## 🚀 快速开始

### 📋 使用此模板

> 💡 **提示**: 这是一个开发模板，请按照以下步骤创建您自己的主题项目

#### 1️⃣ 创建新项目

```bash
# 方式一：使用模板创建新仓库（推荐）
# 在 GitHub 上点击 "Use this template" 按钮

# 方式二：克隆并重命名
git clone https://github.com/your-username/theme-sky-demo.git my-awesome-theme
cd my-awesome-theme

# 删除原有 git 历史，初始化新仓库
rm -rf .git
git init
git add .
git commit -m "feat: 基于 Sky Theme Demo 模板初始化项目"
```

#### 2️⃣ 自定义配置

```bash
# 修改主题基本信息
# 编辑 theme.yaml - 更新主题名称、描述、作者等信息
# 编辑 settings.yaml - 配置主题设置项
# 编辑 package.json - 更新项目名称和描述
```

#### 3️⃣ 开始开发

```bash
# 安装依赖
pnpm install

# 启动开发模式
pnpm dev

# 开始自定义您的主题...
```

### 🛠️ 环境要求

| 工具 | 版本要求 | 说明 |
|------|----------|------|
| Java | 21+ | Halo 运行环境 |
| Node.js | 20+ | 前端开发环境 |
| pnpm | 10.6.5+ | 包管理器 |
| Halo | 2.21+ | 博客系统 |

### 🔄 开发流程

```bash
# 开发模式（实时预览）
pnpm dev

# 代码检查和格式化
pnpm lint
pnpm prettier

# 构建主题包
pnpm build

# 在 Halo 中安装测试
# 将生成的 .halo 文件上传到 Halo 后台
```

## 📖 技术栈与依赖

### 🏗️ 核心依赖

<table>
<tr>
<td>

**运行环境**
- ![Halo](https://img.shields.io/badge/Halo-2.21+-blue?logo=halo) 博客系统
- ![Java](https://img.shields.io/badge/Java-21+-orange?logo=openjdk) 运行环境
- ![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js) 开发环境
- ![pnpm](https://img.shields.io/badge/pnpm-10.6.5+-yellow?logo=pnpm) 包管理器

</td>
<td>

**前端框架**
- ![Vite](https://img.shields.io/badge/Vite-7.0.3+-purple?logo=vite) 构建工具
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3+-blue?logo=typescript) 类型系统
- ![Alpine.js](https://img.shields.io/badge/Alpine.js-3.14.9+-teal?logo=alpine.js) 轻量级框架

</td>
</tr>
</table>

### 🎨 样式框架

| 工具 | 版本 | 用途 |
|------|------|------|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11+-06B6D4?logo=tailwindcss) | `^4.1.11` | 原子化CSS框架 |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.46+-5A67D8?logo=daisyui) | `^5.0.46` | UI组件库 |
| ![PostCSS](https://img.shields.io/badge/PostCSS-8.5.6+-DD3A0A?logo=postcss) | `^8.5.6` | CSS处理器 |
| ![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.21+-orange) | `^10.4.21` | CSS前缀自动添加 |

### 🎯 图标与字体

- **![Iconify](https://img.shields.io/badge/Iconify-100k+-FF6B6B?logo=iconify)** - 支持100+图标集的按需加载
- **@iconify/tailwind** - Tailwind CSS 集成方案
- **@iconify/json** - 完整开源图标集

### 🛠️ 开发工具

<div align="center">

| 代码质量 | 版本控制 | 构建工具 |
|----------|----------|----------|
| ![ESLint](https://img.shields.io/badge/ESLint-9.30.1+-4B32C3?logo=eslint) | ![Husky](https://img.shields.io/badge/Husky-9.1.7+-yellow?logo=git) | ![Halo CLI](https://img.shields.io/badge/Halo_CLI-1.0.0+-blue) |
| ![Prettier](https://img.shields.io/badge/Prettier-3.6.2+-F7B93E?logo=prettier) | ![lint-staged](https://img.shields.io/badge/lint--staged-16.1.2+-green) | ![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.0.12+-green?logo=thymeleaf) |

</div>

## 🎯 开发规范

### 📝 代码风格

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### ⚙️ TypeScript 配置

- ✅ **target**: ESNext
- ✅ **strict**: true (严格模式)
- ✅ **sourceMap**: true (源码映射)
- ✅ **DOM & ESNext** 库支持

### 📦 构建配置

| 资源类型 | 输出路径 | 说明 |
|----------|----------|------|
| JavaScript | `templates/assets/js/[name].js` | 脚本文件 |
| CSS | `templates/assets/css/[name].css` | 样式文件 |
| Fonts | `templates/assets/fonts/[name][extname]` | 字体文件 |
| Images | `templates/assets/images/[name][extname]` | 图片资源 |

## 💡 使用示例

### 🎨 Tailwind CSS

```html
<!-- 现代化卡片设计 -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
  <h3 class="text-2xl font-bold mb-2">现代化设计</h3>
  <p class="opacity-90">使用 Tailwind CSS 创建美观的界面</p>
</div>
```

### 🧩 DaisyUI 组件

```html
<!-- 按钮组件 -->
<button class="btn btn-primary btn-lg">主要按钮</button>
<button class="btn btn-secondary btn-outline">次要按钮</button>

<!-- 徽章组件 -->
<span class="badge badge-success">成功</span>
<span class="badge badge-warning">警告</span>
```

### ⚡ Alpine.js 交互

```html
<!-- 主题切换器 -->
<div x-data="{ isDark: false }" 
     x-init="isDark = document.documentElement.getAttribute('data-theme') === 'dark'">
  <button @click="isDark = !isDark; 
                  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')"
          class="btn btn-ghost">
    <span x-text="isDark ? '🌙 深色模式' : '☀️ 浅色模式'"></span>
  </button>
</div>
```

## 📁 模板项目结构

> 📋 **说明**: 以下是模板的完整目录结构，您可以基于此结构开发自己的主题

```
theme-sky-demo/                 # 🎯 模板根目录
├── 📁 src/                    # 前端源码目录
│   ├── 📄 main.js             # 入口文件（可自定义）
│   ├── 📁 styles/             # 样式文件目录
│   │   ├── 📄 main.css        # 主样式文件
│   │   └── 📄 tailwind.css    # Tailwind 配置
│   └── 📄 vite-env.d.ts       # Vite 类型定义
├── 📁 templates/              # Halo 主题模板目录
│   ├── 📁 assets/             # 构建后静态资源（自动生成）
│   │   ├── 📁 css/            # CSS 文件
│   │   ├── 📁 js/             # JavaScript 文件
│   │   └── 📁 fonts/          # 字体文件
│   ├── 📁 modules/            # 模板模块（可扩展）
│   │   └── 📄 layout.html     # 布局模板示例
│   ├── 📄 index.html          # 首页模板（需自定义）
│   └── 📄 post.html           # 文章模板（需自定义）
├── 📄 vite.config.ts          # Vite 构建配置
├── 📄 theme.yaml              # 🔧 主题配置（必须修改）
├── 📄 settings.yaml           # 🔧 设置配置（必须修改）
├── 📄 package.json            # 🔧 项目依赖（建议修改）
├── 📄 tsconfig.json           # TypeScript 配置
├── 📄 eslint.config.js        # ESLint 配置
├── 📄 prettier.config.js      # Prettier 配置
└── 📄 postcss.config.cjs      # PostCSS 配置
```

### 📝 关键文件说明

| 文件 | 用途 | 是否需要修改 |
|------|------|-------------|
| `theme.yaml` | 主题基本信息配置 | ✅ **必须修改** |
| `settings.yaml` | 主题设置项配置 | ✅ **必须修改** |
| `package.json` | 项目名称和依赖 | 🔧 **建议修改** |
| `templates/*.html` | 页面模板文件 | ✅ **需要自定义** |
| `src/styles/main.css` | 主要样式文件 | 🎨 **根据需要修改** |
| `src/main.js` | JavaScript 入口 | 🔧 **根据需要修改** |

## 🔧 开发命令

<div align="center">

| 命令 | 功能 | 说明 |
|------|------|------|
| `pnpm dev` | 🚀 开发模式 | 启动热更新开发服务器 |
| `pnpm build` | 📦 完整构建 | 构建并打包主题 |
| `pnpm build-only` | 🔨 仅构建 | 只构建不打包 |
| `pnpm lint` | 🔍 代码检查 | ESLint 代码质量检查 |
| `pnpm prettier` | ✨ 代码格式化 | Prettier 代码美化 |

</div>

## 🎨 模板演示

> 📋 **模板预览**: [查看模板演示](https://your-demo-site.com)
> 
> ⚠️ **注意**: 这是模板的基础演示，展示了可用的组件和功能。实际主题效果取决于您的自定义开发。

### 🛠️ 模板包含的功能

- ✅ **响应式布局系统** - 完整的响应式设计框架
- ✅ **主题切换机制** - 深色/浅色模式切换示例
- ✅ **动画组件库** - 预设的过渡动画和交互效果
- ✅ **图标集成方案** - Iconify 图标系统完整配置
- ✅ **UI组件示例** - DaisyUI 组件使用演示
- ✅ **技术栈集成** - 现代化前端工具链配置

### 🎯 基于此模板的主题案例

> 💡 **提示**: 以下是使用此模板开发的主题案例（示例）

- 🌟 **案例一**: [主题名称](链接) - 简短描述
- 🌟 **案例二**: [主题名称](链接) - 简短描述
- 🌟 **案例三**: [主题名称](链接) - 简短描述

*如果您基于此模板开发了主题，欢迎提交 PR 添加到案例列表中！*

## 🤝 贡献

我们欢迎所有形式的贡献来完善这个开发模板！

### 🛠️ 模板改进贡献

1. 🍴 **Fork** 本仓库
2. 🌿 创建特性分支 (`git checkout -b feature/TemplateImprovement`)
3. 💾 提交更改 (`git commit -m 'feat: 改进模板功能'`)
4. 📤 推送到分支 (`git push origin feature/TemplateImprovement`)
5. 🔄 创建 Pull Request

### 📝 贡献类型

- 🔧 **功能增强** - 添加新的模板功能或工具
- 📚 **文档完善** - 改进使用说明和开发指南
- 🐛 **问题修复** - 修复模板中的 bug 或配置问题
- 🎨 **示例补充** - 添加更多组件和布局示例
- ⚡ **性能优化** - 优化构建配置和开发体验

### 🌟 主题案例分享

如果您基于此模板开发了主题，欢迎：
- 📤 提交 PR 将您的主题添加到案例列表
- 💬 在 Issues 中分享您的开发经验
- 🎯 提出模板改进建议

### 提交规范

```bash
# 功能开发
git commit -m "feat: 添加新功能"

# 问题修复
git commit -m "fix: 修复某个问题"

# 文档更新
git commit -m "docs: 更新文档"

# 样式调整
git commit -m "style: 优化样式"
```

## 📄 许可证

本项目基于 [GPL-3.0](LICENSE) 许可证开源。

## 🙏 致谢

感谢以下优秀的开源项目：

- [Halo](https://halo.run) - 强大的博客系统
- [Vite](https://vitejs.dev) - 极速的构建工具
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的CSS框架
- [DaisyUI](https://daisyui.com) - 美观的UI组件库
- [Alpine.js](https://alpinejs.dev) - 轻量级JavaScript框架
- [Iconify](https://iconify.design) - 统一的图标框架

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐**

*Made with ❤️ by Sky Theme Demo Team*

> 🎯 **开始您的主题开发之旅**: 基于此模板，创造属于您的独特 Halo 主题！

</div>
