const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
      test: /\.(png|jpe?g|webp|tiff?)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: 'images/[path][name].[ext]',
          }
        },
        {
          loader: "webpack-image-resize-loader",
          options: {
            width: 300,
            height: 300,
            quality: 100
          },
        },
      ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
  ], 
  },
};

