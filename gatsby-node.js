// gatsby-node.js
const { createProxyMiddleware } = require("http-proxy-middleware");

exports.developMiddleware = ({ app }) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://script.google.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api":
          "/macros/s/AKfycbzmnS1q2rE_cVYdRcD7IpNiBmhSslExX-cSbiPnFusy7B6IARDmn2NNMFFncBY4Fj_qIA/exec",
      },
    })
  );
};
