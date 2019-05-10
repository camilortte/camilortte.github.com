import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/index";
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About - Camilo Ramirez" />
        <h1>About</h1>
        <p>Hola</p>
      </Layout>
    )
  }
}


export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
