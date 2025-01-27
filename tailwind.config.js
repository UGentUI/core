/** @type {import('tailwindcss').Config} */
export default {
  prefix: '',
  // content: ['./index.html', './lib/**/*.ts'],
  content: ['./lib/**/*.ts'],
  theme: {
    extend: {
      screens: {
        xs: {max: '370px'} // Example breakpoint for extra small screens
      },
      colors: {
        'ugent-blue': {
          50: '#E9F1FC',
          100: '#C8DCF5',
          200: '#A6C4EC',
          300: '#84ACE3',
          400: '#6294DA',
          500: '#407CD1',
          600: '#1E64C8',
          700: '#1753A6',
          800: '#124182',
          900: '#0D2F5E',
          950: '#081D3A'
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F1F2F4',
          100: '#DFE0E8',
          200: '#CDD0DA',
          300: '#BBC0CC',
          400: '#A9B0BE',
          500: '#97A0B0',
          600: '#8590A2',
          700: '#6B7486',
          800: '#3B404A',
          900: '#3B404A',
          950: '#0B0C0E',
          1000: '#000000'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
