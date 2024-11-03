/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    function ({ addBase, addUtilities }) {
      addBase({
        '*': {
          padding: 0,
          margin: 0,
          'box-sizing': 'border-box',
        },
        'html, body': {
          width: '100%',
          'background-color': 'black',
        },
      });

      addUtilities({
        '.golden_text': {
          'background-image': 'linear-gradient(90deg, rgba(248, 212, 135, 30.4) 100%, rgba(153, 153, 153, 0.8) 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.blurspot': {
          position: 'absolute',
          width: '400px',
          height: '400px',
          top: '-21.83px',
          right: '0',
          'background-color': 'rgba(252, 22, 91, 1)',
          filter: 'blur(3500px)',
        },
        '.blurspot2': {
          position: 'absolute',
          width: '200px',
          height: '200px',
          top: '57.48px',
          left: '210.15px',
          'background-color': 'rgba(22, 252, 210, 1)',
          filter: 'blur(3500px)',
        },
        '.blurspot3': {
          position: 'absolute',
          width: '400px',
          height: '400px',
          bottom: '0',
          left: '0',
          'background-color': 'rgba(27, 119, 228, 1)',
          filter: 'blur(3500px)',
        },
        '@media (max-width: 480px)': {
          '.blurspot, .blurspot2, .blurspot3': {
            width: '150px',
            height: '150px',
            filter: 'blur(300px)',
          },
        },
        '.scrollbar-hide': {
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        ".scrollbar-hide2::-webkit-scrollbar": {
          width: "5px",

        },
        ".scrollbar-hide2::-webkit-scrollbar-thumb": {
          "background-color": "darkgrey",
          "border-radius": "20px",
          "height": "10px"
        }
      });
    },

  ],
});
