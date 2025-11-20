/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  
  theme: {
    extend: {

      colors: {

        'orange-50': '#fff7ed',
        'orange-100': '#ffedd5',
        'orange-200': '#fed7aa',
        'orange-300': '#fdba74',
        'orange-400': '#fb923c',
        'orange-500': '#f97316',
        'orange-600': '#ea580c', 
        'orange-700': '#c2410c',
        'orange-800': '#9a3412',
        'orange-900': '#7c2d12',
        'orange-950': '#431407',
        'orange': '#ea580c',
        
        'green-50': '#eeffef',
        'green-100': '#d7ffdd',
        'green-200': '#b3ffbb',
        'green-300': '#77fe88',
        'green-400': '#35f34d',
        'green-500': '#0bdd27',
        'green-600': '#02b71b',
        'green-700': '#068f19',
        'green-800': '#0b7019',
        'green-900': '#0b5c18',
        'green-950': '#003409',
        'green': '#02b71b', 
        

        'dark': '#0a0a0a',    
        'dark-secondary': '#171717',
        'dark-tertiary': '#262626',
        'light': '#fafafa', 
        'light-secondary': '#a3a3a3',
        'light-tertiary': '#737373',
      },
      

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}