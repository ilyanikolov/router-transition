const path = require('path');
const glob = require('glob');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: glob.sync(
          path.join(__dirname, '**/node_modules/@material')
        ).map((dir) => path.dirname(dir)),
      }
    },
  }
};