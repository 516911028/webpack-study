const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConf = require('./webpack.common');

module.exports = merge(commonConf, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            },
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
});