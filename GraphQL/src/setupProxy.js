const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://peaceful-springs-01295.herokuapp.com',
    createProxyMiddleware({
      target: 'https://peaceful-springs-01295.herokuapp.com',
      changeOrigin: true,
    })
  );
  app.use(
    'https://productbackendapi.herokuapp.com/products/getId',
    createProxyMiddleware({
      target: 'https://productbackendapi.herokuapp.com/products/getId',
      changeOrigin: true,
    })
  );
};