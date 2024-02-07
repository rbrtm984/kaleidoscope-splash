// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  };

  // add a console log to print the webpack config
console.log(require('react-scripts/config/webpack.config'));
