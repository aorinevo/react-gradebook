var path = require( 'path' );

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};
