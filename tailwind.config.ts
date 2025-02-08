import type { Config } from 'tailwindcss'
import sharedConfig from '@my-chatbot/ui/tailwind.config'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@my-chatbot/ui/**/*.{js,ts,jsx,tsx}', // Add this line
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  presets: [sharedConfig], // Add this line to inherit UI package's Tailwind config
} satisfies Config

export default config
