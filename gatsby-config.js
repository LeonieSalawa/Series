require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Léonie – a Series`,
    siteTitleAlt: `Léonie - a Series`,
    siteHeadline: `Léonie - a Series`,
    siteUrl: `https://series.leoniesalawa.me`,
    author: `@leoniesalawa`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Cœurly`,
        location: `Belgium`,
        socialMedia: [
          {          
            title: `Twitter`,
            href: `https://www.twitter.com/leoniesalawa`
          },
          {          
            title: `Instagram`,
            href: `https://www.instagram.com/leoniesalawa`
          },
          {          
            title: `Pinterest`,
            href: `https://www.pinterest.com/leoniesalawa_`
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cœurly – a Series`,
        short_name: `Cœurly`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `https://series.leoniesalawa.me`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/coeurly.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
  
}
