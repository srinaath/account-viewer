const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = env => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    bundle: './src/index.tsx',
    main: './src/styles/global.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
    // filename: 'bundle.js'
  },
  devtool: env.production ? 'none' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    watchContentBase: true,
    hot: true,
    // inline: false
    setup (app) {
      app.post('*', (req, res) => {
        res.redirect(req.originalUrl)
      })
    },
    watchOptions: {
      ignored: [
        '**/src/**/*.js',
        '**/src/**/*.test.ts',
        '**/node_modules'
      ]
    }
  },
  module: {
    rules: [
      {
        parser: {
          amd: false // resolves the issue where lodash is being added to the window object
        }
      },
      { test: /\.tsx?$/, loader: "babel-loader" },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]',
              publicPath: './'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff2|woff|eot|otf|ttc)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]',
              publicPath: './'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([{
      from: 'static',
      to: 'static'
    }]),
    new Dotenv({
      path: env.production ? 'env/.env.production' : 'env/.env.development'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})