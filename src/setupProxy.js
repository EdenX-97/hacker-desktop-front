const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:8777',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
            '^/api': ''
        }
    }))
}
