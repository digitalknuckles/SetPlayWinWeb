const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // For extracting CSS in production
const HtmlWebpackPlugin = require("html-webpack-plugin"); // For creating an HTML template
const TerserPlugin = require("terser-webpack-plugin"); // For JS minification in production

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "bundle.[contenthash].js" : "bundle.js", // Cache busting in production
      publicPath: "/"
    },
    mode: argv.mode || "development",
    devtool: isProduction ? false : "source-map", // Only enable source maps in development
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
      port: 3000,
      open: true, // Automatically open the browser
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader", // Use MiniCssExtractPlugin in production
            "css-loader"
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource" // Better handling of images
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // Use an HTML template
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
        } : false,
      }),
      isProduction && new MiniCssExtractPlugin({
        filename: "styles.[contenthash].css"
      }), // Extract CSS in production
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({ // Minify JS in production
          terserOptions: {
            compress: {
              drop_console: true, // Remove console logs in production
            }
          }
        })
      ],
      splitChunks: {
        chunks: "all", // Enable code-splitting to improve loading performance
      },
    },
    cache: {
      type: "filesystem", // Enable filesystem caching to speed up builds
    },
  };
};