/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/sreens/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-root': '#e8e8e8',
        header: '#f53d2d',
        'header-linear': '#f63',
        success: '#30b566',
        error: '#ee2c4a',
        'text-secondary': 'rgba(0,0,0,.8)'
      },
      fontFamily: {
        serif:
          'Helvetica Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi Zen Hei,Hiragino Sans GB,儷黑 Pro,LiHei Pro,Heiti TC,微軟正黑體,Microsoft JhengHei UI,Microsoft JhengHei,sans-serif'
      }
    }
  },
  plugins: []
}
