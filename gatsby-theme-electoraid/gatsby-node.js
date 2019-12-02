exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
        electoraid {
            electoraid_office(where:{term_end:{_gte:"2019-12-01"}}) {
                electoraid_officetenure {
                    electoraid_person {
                        slug
                    }
                }
            }
        }
    }
  `)
  data.electoraid.electoraid_office.forEach(d => {
    const slug = d.electoraid_officetenure.electoraid_person.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/person.js`),
      context: { slug: slug },
    })
  })
}