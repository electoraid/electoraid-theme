module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: `key6jLssuOVS3bsBu`, // may instead specify via env, see below
                tables: [
                    {
                        baseId: `appvkCEaukfdoHfgb`,
                        tableName: `People`,
                        //   tableView: `YOUR_TABLE_VIEW_NAME`, // optional
                        //   queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
                        //   mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
                        //   tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
                        tableLinks: [`Offices`, 'Candidacies'],
                    },
                    {
                        baseId: `appvkCEaukfdoHfgb`,
                        tableName: `Offices`,
                    },
                    {
                        baseId: `appvkCEaukfdoHfgb`,
                        tableName: `Candidacies`,
                    },

                ]
            }
        }
    ]
}
