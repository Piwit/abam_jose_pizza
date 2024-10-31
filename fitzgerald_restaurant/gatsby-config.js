/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `fitzgerald_restaurant`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
      },
    },
  ],
};
