const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './index.js', // replace with the path to your main source file
  output: {
    filename: 'my-package.min.js', // replace with the desired output file name
    library: 'MyPackage', // replace with your package name
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false
          }
        }
      })
    ]
  }
};
