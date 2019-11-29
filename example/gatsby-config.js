module.exports = {
  siteMetadata: {
    title: `Electoraid`,
    description: `Electoraid`,
    siteName: `Electoraid`,
    twitterHandle: `thechicagoreporter`,
  },
  plugins: [
    `gatsby-theme-electoraid`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "ELECTORAID",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "electoraid",
        // Url to query from
        url: "https://electoraid-api.herokuapp.com/v1/graphql",
      },
    },
  ]
}
