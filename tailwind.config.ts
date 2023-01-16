import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'
import path from 'path'
const srcDir = path.resolve(__dirname, 'src')
export default <Partial<Config>>{
    theme: {},
    plugins: [],
    content: [
      `${srcDir}/components/**/*.{vue,js,ts}`,
      `${srcDir}/layouts/**/*.vue`,
      `${srcDir}/pages/**/*.vue`,
      `${srcDir}/composables/**/*.{js,ts}`,
      `${srcDir}/plugins/**/*.{js,ts}`,
      `${srcDir}/App.{js,ts,vue}`,
      `${srcDir}/app.{js,ts,vue}`,
      `${srcDir}/Error.{js,ts,vue}`,
      `${srcDir}/error.{js,ts,vue}`
    ]
  }