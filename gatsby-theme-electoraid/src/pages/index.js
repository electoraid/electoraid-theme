import React from "react"
import { graphql } from "gatsby"


export default ({ data }) => {
    return <>{data.electoraid.electoraid_person.map( (d, i) => (<p key={i}>{d.first_name} {d.last_name}</p>))}</>
}

export const query = graphql`
    query PageQuery {
        electoraid {
            electoraid_person(limit: 500, order_by:{candidate_id: desc}) {
                candidate_id
                first_name
                last_name
            }
        }
    }
`