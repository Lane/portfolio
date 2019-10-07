module.exports = {
  siteMetadata: {
    title: `lane olson`,
    description: `Lane Olson is a designer and developer with a strong focus on user experience.`,
    author: `@laneolson`,
    socialMedia: [
      { id: 'github', url: `https://www.github.com/Lane` },
      { id: `codepen`, url: `https://www.codepen.io/Lane` },
      { id: `linkedin`, url: `http://ca.linkedin.com/in/lanegolson` },
      { id: `twitter`, url: `https://www.twitter.com/laneolson` },
    ]
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lane Olson's Portfolio`,
        short_name: `laneolson.ca`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
