module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-intl`,
            options: {
            // language JSON resource path
            path: `${__dirname}/src/intl`,
            // supported language
            languages: [`en`, `es`],
            // language file path
            defaultLanguage: `en`,
            redirect: true,
            }
        }
    ]
}
