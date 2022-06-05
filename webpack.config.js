const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/App.tsx",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                ],
              },

        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx','.css'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })]
};