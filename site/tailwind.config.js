/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {

        'purple-50': '#faf5ff',
        'purple-100': '#f4e8ff',
        'purple-200': '#ebd5ff',
        'purple-300': '#dbb4fe',
        'purple-400': '#c384fc',
        'purple-500': '#aa55f7',
        'purple-600': '#9333ea',
        'purple-700': '#7c22ce',
        'purple-800': '#6821a8',
        'purple-900': '#541c87',
        'purple-950': '#380764',
        'purple': '#9333ea', 

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
        'green': '#0bdd27', 
        
     
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