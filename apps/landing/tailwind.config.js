module.exports = {
  presets: [require('ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-1000': '#0D0415',
        'neutral-900': '#161522',
        'neutral-800': '#202231',
        'neutral-700': '#2E3348',
      },
    },
  },
}
