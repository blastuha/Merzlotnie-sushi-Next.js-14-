import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
        },
      },
      screens: {
        // xs: '320px',
        // s: '470px',
        // sm: '576px',
        // md: '768px',
        tablet: '768px',
        desktop: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
