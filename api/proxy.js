const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // Прокси-сервер для запросов тайлов
  const proxy = createProxyMiddleware({
    target: 'http://localhost:8080', 
    changeOrigin: true,             
    pathRewrite: { '^/tiles': '' },  
  });

  proxy(req, res);  
};
