import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import AuthorBio from '../components/AuthorBio'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

class Authors extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const author = get(this, 'props.data.author')
    const pageTitle = `${author.frontmatter.title}`

    return (
      <Layout location={this.props.location} title={pageTitle}>
        <SEO
          title={author.frontmatter.title}
          path={author.frontmatter.slug}
          cover={author.frontmatter.cover && author.frontmatter.cover.publicURL}
        />

        <Hero
          heroImg={author.frontmatter.cover && author.frontmatter.cover.publicURL}
          title={author.frontmatter.title}
        />

        <Wrapper>
          <AuthorBio author={author} />
        </Wrapper>

        <Wrapper>
          <h1 style={{ margin: '0 0 2em 0' }}>Posts authored by "{this.props.pageContext.author}"</h1>
          <PostsList posts={posts} />
        </Wrapper>
      </Layout>
    )
  }l
}

export default Authors

export const pageQuery = graphql`
  query PostsByAuthor($author: String!) {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {authors: {eq: $author}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            subtitle
            tags
            language
            slug
            authors
          }
        }
      }
    }
    author: markdownRemark(frontmatter: {slug: {eq: $author}, type: {eq: "author"}}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        slug
        github
        twitter
        linkedin
        email
        avatar {
          publicURL
        }
        cover {
          publicURL
        }
      }
    }
  }
`
