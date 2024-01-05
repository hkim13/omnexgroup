/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        green: '#52DB78',
        white: '#FFFFFF',
      },

      padding: {
        xsm: '2rem', //p-8 32px
        sm: '4rem',  //p-16 64px
        lg: '5rem', //p-20 80px
      }
    },
  },
  plugins: [],
}
