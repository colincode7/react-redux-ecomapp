/* eslint-disable */
var fs = require('fs');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'server/server.js'),

  output: {
    path: __dirname + '/static/dist/',
    filename: 'server.bundle.js',
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext;
  }, {}),

  node: {
    __filename: true,
    __dirname: true,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
        },
      },
    ],
  },
};
