import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0f1c',
        'primary': '#1f2937',
        'accent': '#60c0ff',
        'accent-hover': '#3daeff',
        'text': '#f1f5f9',
        'muted': '#94a3b8',
        'border': '#334155',
      },
    },
  },
  plugins: [],
}
export default config