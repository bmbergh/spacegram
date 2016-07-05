var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var autoprefixer = require('autoprefixer');

module.exports = {

  context: __dirname,

  entry:  [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/app/main' // entry point of my app
  ],
  
   /*
    * By default, thewebpack-dev-serverwill serve the files in the root of the project.
    * To serve files from a different folder (such as the "public" folder in our sample project,
    * you need to configure a specific content base
    */
  devServer: {
    contentBase: "./src/app/main",
    hot: true
  },
  output: {
      path: path.resolve('./src/public/dist'),
      publicPath: 'http://localhost:3000/',
      filename: "[name].bundle.js",
  },

  plugins: [
   new webpack.NoErrorsPlugin(),
   new ExtractTextPlugin('[name].css'),// It moves every css requires/imports into a separate css output file
                                      //(So your styles are no longer inlined into the JavaScript
   new HtmlWebpackPlugin({
      title: 'Spacegram',
      template: path.join(__dirname, 'src/app/index.html'),
      inject: 'body'
    }),
   new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
   new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
   /*
    * Hot module replacement is a Webpack plugin that updates the component
    * in real time on the browser when you change its code
    */
   new webpack.HotModuleReplacementPlugin(),
 ],

  module: {
    loaders: [
     /*
      * You can either use the jsx-loader or babel-loader to pre-compile JSX into JavaScript (React baby!)
      * if you write your code in JSX and ES6, then you’ll need to use the babel-loader, along with the babel plugin for React
      * npm install babel-core babel-loader babel-preset-es2015 babel-preset-react (shown below)
      */
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel",
        presets: ['es2015', 'react']
      },
      {
        test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' 
      },
      {
          test: /\.jpe?g$|\.ico$|\.gif$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
      },
      {
        /*
         * It moves every require("style.css") in entry chunks into a separate css output file.
         * So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css).
         * If your total stylesheet volume is big, it will be faster
         * because the stylesheet bundle is loaded in parallel to the javascript bundle.
         */
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'css!' +
          'postcss!' +
          'sass?sourceMap'
        )
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules')]
  },
  // PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
  postcss: [
    autoprefixer({
      browsers: ['ios >= 7']
    })
  ],

  devtool: 'source-map',

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
    /*
     * We can declare aliases in many ways so we could not rely on relative paths
     * but just reference our code as regular node modules, this is AMAZING! :)
     */
    alias: {
      'app': path.resolve(__dirname, './src/app'),
      'components': path.resolve(__dirname, './src/app/components'),
      'styles': path.resolve(__dirname, './src/styles'),
      'img': path.resolve(__dirname, './src/public/img')
    }
  },
}