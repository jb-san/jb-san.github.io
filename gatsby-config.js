module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-154722259-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "x3m.io",
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
