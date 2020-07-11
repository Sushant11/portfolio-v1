const config = require('./src/config')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
    author: 'SC'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sushant Chitrakar`,
        short_name: `SC`,
        start_url: `/`,
        background_color: config.colors.softWhite,
        theme_color: config.colors.softDark,
        display: `minimal-ui`,
        icon: `src/images/favicons/icon-72x72.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}