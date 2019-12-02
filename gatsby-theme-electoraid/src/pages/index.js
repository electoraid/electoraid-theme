import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PoliticianTable from "../components/politician-table"
import { FormattedMessage } from "gatsby-plugin-intl"

export default ({ data }) => {
    return <Layout>
        <h1>
            <FormattedMessage id="title"/>
        </h1>
        <PoliticianTable data={data.electoraid.electoraid_office} />
    </Layout>
}

export const query = graphql`
  query PageQuery {
    electoraid {
        electoraid_office(where:{term_end:{_gte:"2019-12-01"}}) {
        name
        term_start
        term_end
        electoraid_officetenure {
            electoraid_person {
            first_name
            last_name
            electoraid_person_committees {
                isboe_committee {
                name
                condensed_receipts_aggregate {
                    aggregate {
                    sum {
                        amount
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
  }
`