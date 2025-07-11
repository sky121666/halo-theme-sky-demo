/**
 * Sky Theme - 主要 JavaScript 文件
 * 集成 Alpine.js 和 DaisyUI
 */

// 导入样式文件
import './styles/tailwind.css'
import './styles/main.css'



// 导入 Alpine.js
import Alpine from 'alpinejs'

// Alpine.js 数据组件


Alpine.data('themeToggle', () => ({
  isDark: false,
  init() {
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  },
  toggle() {
    this.isDark = !this.isDark
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
  }
}))



// 将工具暴露到全局
window.Alpine = Alpine

// 启动 Alpine.js
Alpine.start()

