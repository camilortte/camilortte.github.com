import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/index";
import SEO from "../components/seo";
import Post from "../components/Post/index";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section className="posts">
          <h1 className="content-subhead">Latest Posts</h1>
          {posts.map(({ node }) => {  
            return (
              <Post data={node} key={node.id}/>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title            
            tags
          }
        }
      }
    }
  }
`
