var NODE_ENV = process.env.NODE_ENV;
var webpackConfig = require(`./webpack/webpack.config.${ NODE_ENV }`).default;

export default webpackConfig;
