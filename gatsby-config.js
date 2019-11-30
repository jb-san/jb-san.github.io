module.exports = {
  plugins: [
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
