const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.json' ],
    mainFields: ['main', 'module']
  },
  plugins: [
    new Dotenv()
  ]
};
