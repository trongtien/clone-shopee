/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sreens/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header": "#f53d2d",
        "header-linear": "#f63"
      },
      fontFamily: {
        serif: "Helvetica Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi Zen Hei,Hiragino Sans GB,儷黑 Pro,LiHei Pro,Heiti TC,微軟正黑體,Microsoft JhengHei UI,Microsoft JhengHei,sans-serif"
      }
    },
  },
  plugins: [],
}
