import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    console.log(data)
    const person = data.electoraid.electoraid_person[0] 
    return (
        <Layout>
            <h1>{person.first_name} {person.last_name}</h1>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    electoraid {
        electoraid_person(where: {slug: {_eq: $slug}}) {
            first_name
            last_name
        }
    }
  }
`