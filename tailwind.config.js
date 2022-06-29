module.exports = {
  content: [
    './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    extend: {
      colors: {
     'primary':'#933A57',
     'deep-blue':'#001F47',
     'secondary':{
       100:'#F0F4F9;'
        }
    
      },

      listStyleType: {
        square: 'square'
      },

    },
    container: {
      padding: '3rem',
    },

  

    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
