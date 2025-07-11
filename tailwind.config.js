/**
 * Tailwind CSS配置文件
 * 集成Iconify图标方案
 */
module.exports = {
  content: [
    './src/**/*.{js,ts,html}',
    './templates/**/*.html'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@iconify/tailwind').plugin()
  ],
  daisyui: {
    themes: false
  }
}