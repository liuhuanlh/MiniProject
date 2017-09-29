var webpack = require('webpack');
module.exports={
    entry:"./index.js",
    output:{
        filename:"bundle.js",
        path:__dirname+"/"
    },
    module:{
        loaders:[
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react'] } },
            // {test: /\.js$/,loader: 'babel?presets=react&&es2015'},
            // { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
            // { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
            // { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            // { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}