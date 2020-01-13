module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-154722259-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
        },
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`VT323`],
        display: "swap",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `X3M`,
    author: `Jonathan Borg`,
    description: `Front-end, fullstack, whatever developer`,
    social: [
      {
        name: `github`,
        url: `https://github.com/jb-san`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jonathan-borg-8a520b97/`,
      },
    ],
  },
}
