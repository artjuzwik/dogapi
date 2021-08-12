const path = require('path'),
      webpack = require('webpack'),
      ESLintPlugin = require('eslint-webpack-plugin')

      

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx','.css','.scss']
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname, './dist'),
        hot:true
    }
}