import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

const PoliticianRow = ({name, term_start, term_end, electoraid_officetenure}) => {
    return <tr>
        <td>{name}</td>
        <td>{electoraid_officetenure.electoraid_person.first_name}</td>
        <td>{electoraid_officetenure.electoraid_person.last_name}</td>
        <td>{electoraid_officetenure.electoraid_person.electoraid_person_committees.length}</td>
        <td>{term_start}</td>
        <td>{term_end}</td>
    </tr>
}

const PoliticianTable = ({ data }) => {
    console.log(data)
    return <table>
        <thead>
            <tr>
                <th>
                    <FormattedMessage id="politicianTable.columns.positionName" />
                </th>
                <th>
                    <FormattedMessage id="politicianTable.columns.firstName" />
                </th>
                <th>
                    <FormattedMessage id="politicianTable.columns.lastName" />
                </th>
                <th>
                    <FormattedMessage id="politicianTable.columns.pacs" />
                </th>
                <th>
                    <FormattedMessage id="politicianTable.columns.start" />
                </th>
                <th>
                    <FormattedMessage id="politicianTable.columns.end" />
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((d, i) => <PoliticianRow key={`pol-${i}`} {...d} />)}
        </tbody>
    </table>
}

export default PoliticianTable