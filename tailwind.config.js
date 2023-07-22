/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "backgound": "#05071E",
        "gray": "#c9c9c9",
        "lightslategray": "#858cab",
        "darkgray": "#111422",
        "dark-blue": "#24293d",
        "white": "#fff",
        "salmon": "#ff6b6b",
        "darkslategray": "#2a314a",
        "orange": {
          "100": "#ffbe18",
          "200": "#ffa33c"
        },
        "tomato": "#ff4243",
        "blue-main": "#8ebbff",
        "dodgerblue": {
          "100": "#3c89ff",
          "200": "#3b89ff"
        },
        "mediumseagreen": "#01c284",
        "crimson": "#ff2c52",
        "whitesmoke": "#f3f3f3",
        "light-blue": "#2f3855",
        "black": "#000",
        "lightblue": "#cae8f5",
        "ghostwhite": "#f4f4fc"
      },
      "fontFamily": {
        "fs-elliot-pro": "'FS Elliot Pro'",
        "ubuntu": "Ubuntu"
      },
      "borderRadius": {
        "10xs": "3px",
        "9xs-5": "3.5px",
        "11xs-5": "1.5px",
        "6xs-3": "6.3px",
        "8xs": "5px",
        "sm": "14px",
        "mini": "15px",
        "3xs-2": "9.2px",
        "xl": "20px",
        "81xl": "100px",
        "33xl": "52px",
        "3xs": "10px"
      }
    },
    "fontSize": {
      "xs": "12px",
      "xl": "20px",
      "base-1": "15.1px",
      "3xs": "10px",
      "5xs": "8px",
      "base": "16px",
      "sm": "14px",
      "3xl": "22px",
      "lg": "18px",
      "9xl": "28px",
      "5xl": "24px"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}