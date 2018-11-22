'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  entry: ['./resources/js/main.js', './resources/scss/style.scss'],
  devServer: {
    compress: false,
    port: 8080
  },
  output: {
    filename: 'public/js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/css/style.css',
            },
          },
          {loader: 'extract-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
              sourceMap: true
            },
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)|(dist)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        }
      }
    ],
  },
};
