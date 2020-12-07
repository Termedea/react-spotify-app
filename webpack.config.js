const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('tailwindcss')
];

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: { postcssOptions: { plugins: postCSSPlugins } }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    watch: true,
    devServer: {
        before: function (app, server) {
            server._watch('./dist/**/*.html');
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 3001
    }
};
