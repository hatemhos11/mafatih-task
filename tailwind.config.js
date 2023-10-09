module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors:{ 
        "main": "#EDA31A",
        "dark": "#243840",
        "white-blue": "#F0F1F7",
        "main-gray": "#DADBE6",
        "input": "#E1E1E5",
        "placeholder": "#C9C9C8",
        "title": "#9597A6",
        "border": "#707070", 
        "alt": "#545871",
        "red": "#F2472C"
      },
      borderRadius:{
        "main": "5px",
        "long": "15px"
      },
      dropShadow: {
        "layout": "0 0 10px #545871",
        "light": "0 3px 6px rgba(0,0,0,.16)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}