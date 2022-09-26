// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

const host = 'https://rancher-test.alfa-bank.kz:30380/bnpl/';

module.exports = function (app) {
    app.use(
        '/proxy',
        createProxyMiddleware({
            target: host,
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': '',
            },
        }),
    );
};
