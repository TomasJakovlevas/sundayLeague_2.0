import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        // primary: {
        //   50: '#D8EBFD',
        //   100: '#B1D6FB',
        //   200: '#68B0F8',
        //   300: '#1A87F4',
        //   400: '#0961B9',
        //   500: '#05386B',
        //   600: '#042E58',
        //   700: '#03213F',
        //   800: '#02172C',
        //   900: '#010A13',
        //   950: '#00050A',
        // },
        secondary: {
          50: '#E9F7F4',
          100: '#D2EFE9',
          200: '#A5DED3',
          300: '#79CEBD',
          400: '#4CBDA7',
          500: '#379683',
          600: '#2C7768',
          700: '#215A4E',
          800: '#163C34',
          900: '#0B1E1A',
          950: '#050F0D',
        },
        accent: {
          50: '#EEFBF4',
          100: '#DEF8E9',
          200: '#BCF0D4',
          300: '#9FEAC1',
          400: '#7EE2AB',
          500: '#5CDB95',
          600: '#2DCD75',
          700: '#229B58',
          800: '#166439',
          900: '#0B321D',
          950: '#06190E',
        },
        // background: {
        //   50: '#F3FCF6',
        //   100: '#EAFAF0',
        //   200: '#D2F4DF',
        //   300: '#BDEFD0',
        //   400: '#A4E9BF',
        //   500: '#8EE4AF',
        //   600: '#52D685',
        //   700: '#2BB560',
        //   800: '#1D773F',
        //   900: '#0F3E21',
        //   950: '#071D0F',
        // },

        white: '#F9F6EE',
      },
      fontFamily: {
        mirador: ['Mirador'],
        test: ['Catamaran', 'sans-serif'],
        bungy: ['var(--font-bungee)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: '#F9F6EE', // or DEFAULT
            primary: {
              50: '#C8D2E0',
              100: '#BBC7D8',
              200: '#A1B2C9',
              300: '#879DBB',
              400: '#6D88AC',
              500: '#577399',
              600: '#435875',
              700: '#2E3D51',
              800: '#1A222E',
              900: '#06070A',
              DEFAULT: '#577399',
            },
            success: {},
            warning: {},
            danger: {
              50: '#F5CBCC',
              100: '#F2BABB',
              200: '#EC979A',
              300: '#E57578',
              400: '#DF5356',
              500: '#D93034',
              600: '#BD2327',
              700: '#8E1A1D',
              800: '#5E1113',
              900: '#2F090A',
              DEFAULT: '#D93034',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            default: {},
            primary: {
              DEFAULT: '#D93034',
              50: '#F5CBCC',
              100: '#F2BABB',
              200: '#EC979A',
              300: '#E57578',
              400: '#DF5356',
              500: '#D93034',
              600: '#BD2327',
              700: '#8E1A1D',
              800: '#5E1113',
              900: '#2F090A',
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
export default config;

// primary blue
// #577399

// white
// #CCDAD1

// danger
// #9B1D20
