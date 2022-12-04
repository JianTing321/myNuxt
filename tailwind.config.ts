import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // 可自訂義顏色
        primary: '#00FF00'
        // primary: defaultTheme.colors.green
      }
    }
  }
}
