import React from "react"
import { graphql } from 'gatsby'

export default ({data}) => {
    return (
        <div>
            <h1>Electoraid site</h1>
            {data.allAirtable.nodes.map( (d, i) => 
                <p key={i}>{d.data.First_name} {d.data.Last_name}</p>
            )}
        </div>
    )
}

export const query = graphql`
query PageQuery {
    allAirtable(filter: {table: {eq: "People"}}) {
      nodes {
        data {
          First_name
          Last_name
          Offices {
            data {
              ID
            }
          }
          Candidacies {
            data {
              ID
            }
          }
        }
      }
    }
  }
  
`