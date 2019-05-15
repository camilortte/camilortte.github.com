import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout/index";
import SEO from "../../components/seo";
import Post from "../../components/Post/index";
import Disqus from 'gatsby-plugin-disqus';


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext;
    
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <section className="posts">
          <Post data={post} />
          <div>
            <ul className="paginator">
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                </Link>
                )}
              </li>
            </ul>
          </div>
          <Disqus 
            identifier={disqusConfig.identifier}
            title={post.title}
          />
        </section>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(format: HTML)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")        
        tags
      }
    }
  }
`

