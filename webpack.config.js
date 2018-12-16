let path = require('path');

let conf = {
    entry: './js/index.js', //точка входа
    output: {
        path: path.resolve(__dirname, './dist'),  // прописываем абсолютный путь после установки модуля path
        filename: 'main.js',  //точка выхода
        publicPath: 'dist/'   // указываем путь для браузера
    },
    devServer: {
        overlay: true,  //активируем вывод лога с ошибками
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = conf;
