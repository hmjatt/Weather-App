const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
		clean: true,
    },
	devtool: 'source-map',
    module: {
        rules: 
        [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Weather App',
			filename: 'index.html',
			template: './src/template.html',
		}),
	]
};