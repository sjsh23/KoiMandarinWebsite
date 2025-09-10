require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `KOI Mandarin Education`,
    description: ``,
    author: `@koi_mandarin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/koi-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `cn`],
        defaultLanguage: `en`,
        siteUrl: process.env.SITE_URL,
        i18nextOptions: {
          interpolation: {
            escapeValue: false 
          },
          keySeparator: false,
          nsSeparator: false
        },
      }
    },
  ],
  
  // 🔹 Add proxy middleware for /api → Google Apps Script
  developMiddleware: app => {
    const { createProxyMiddleware } = require('http-proxy-middleware');
    app.use(
      '/apps-script',
      createProxyMiddleware({
        target: 'https://script.google.com/macros/s/AKfycbzmnS1q2rE_cVYdRcD7IpNiBmhSslExX-cSbiPnFusy7B6IARDmn2NNMFFncBY4Fj_qIA/exec', // base domain
        changeOrigin: true,
      })
    );
  },
};
