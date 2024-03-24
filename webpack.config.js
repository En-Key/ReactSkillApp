const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

// "build:dev": "env NODE_ENV=development webpack --config webpack.config.js",
// "build:prod": "env NODE_ENV=production webpack --config webpack.config.js",
// module.exports = (env) => {
//     const isDev = env.MODE === "development";
  
//     // "build": "webpack --env MODE=production",
//     // "start": "webpack serve --env MODE=development"
  
//     return {
//       mode: env.MODE,
//       devtool: isDev ? "inline-source-map" : false,
//       devServer: isDev
//         ? {
//             open: true,
//             hot: true,
//             port: 3000,
//           }
//         : undefined,
  

console.log(NODE_ENV);

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }] 
    },
    plugins: [
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
        // hot: true
    },
    devtool: setupDevtool(),
};