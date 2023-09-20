import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
        "primary-black": "#20283c",
        "primary-white": "#f8f9f9",
        "gray-white": "#a2a9b5",
        "dark-gray": "#84848f",
        "gray-black": "#878c94",
        "gray-blue": "#7c8c9c",
        "gray-skin": "#bcbcc4",
        "gray": "#bdc4c4",
        "light-gray": '#c9ced5',
        "text_primary" : 'rgba(0, 0, 0, 0.87)',
        "text_secondary" : 'rgba(0, 0, 0, 0.54)',


      },
    },
  },
  plugins: [],
}
export default config
