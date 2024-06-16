/** @type {import('tailwindcss').Config} */
export default {
    content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'footer-bg': "url('../img/cover-2.jpg')",
        },
        fontSize: {
          'xs': '12px',    // .75rem
          'sm': '14px',    // .875rem
          'base': '16px',  // 1rem
          'lg': '18px',    // 1.125rem
          'xl': '20px',    // 1.25rem
          '2xl': '24px',   // 1.5rem
          '3xl': '30px',   // 1.875rem
          '4xl': '36px',   // 2.25rem
          '5xl': '48px',   // 3rem
          '6xl': '64px',   // 4rem

        },
        colors: {
          "primary": "#0074D9",
          "secondary": "#70bf73",
          "gray": '#1b1b1c',
        },
        borderWidth: {
          '3': '3px',
        },
        boxShadow: {
          'custom': '0px -10px 50px #70bf73',
          'custom-lightgrey': '0px -10px 15px lightgrey',
        },
        borderRadius: {
          'custom': '16px',
        },
        transitionDuration: {
          '800': '0.8s',
        },
      },
      fontFamily: {
        Fira: ["Fira Sans, sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "	768px",
        lg: "1024px",
        // xl:"1280px"
      },
    },
    plugins: [],
  }

