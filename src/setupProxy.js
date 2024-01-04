const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:"https://luxchono.onrender.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
