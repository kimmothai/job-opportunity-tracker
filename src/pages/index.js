import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JobTable from "../components/job-table"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Interesting Job Opportunities</h1>
    <JobTable></JobTable>
  </Layout>
)

export default IndexPage
