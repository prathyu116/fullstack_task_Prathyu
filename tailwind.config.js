
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#b45309',
          'primary-dark': '#92400e',
          'primary-focus': '#f59e0b',
          'icon-light': '#f59e0b',
        },
      },
      boxShadow: {
        'brand-light': '0px 2px 8px 0px rgba(116, 66, 29, 0.2)', 
      },
    },
  },
  plugins: [],
};
