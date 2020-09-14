import { useStaticQuery, graphql } from "gatsby"
import React from "react"

// import "./layout.css"
import "./job-table.css"

const JobTable = ({ children }) => {
  const data = useStaticQuery(graphql`
    query JobTableQuery {
      postgres {
        allJobs {
          edges {
            node {
              company
              deadline
              url
              jobTitle
              location
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>URL</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {data.postgres.allJobs.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.company}</td>
              <td>{node.jobTitle}</td>
              <td>{node.location.join(", ")}</td>
              <td>{node.url}</td>
              <td>{node.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobTable
