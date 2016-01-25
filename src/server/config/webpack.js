import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../../webpack.config';

export default  function(app,config){
    //compiler实例
    const compiler = webpack(webpackConfig);
    const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    });
    const hotMiddleware = webpackHotMiddleware(compiler);
    app.use(devMiddleware);
    app.use(hotMiddleware);

    app.use('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'app/index.html'))
    });
}
