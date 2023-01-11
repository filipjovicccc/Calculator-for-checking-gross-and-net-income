module.exports = {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')({
        grid: true,
        remove: false,
       
      }),
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.js',
          './public/index.html',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }