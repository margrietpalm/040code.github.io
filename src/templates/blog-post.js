import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        {post.frontmatter.asciinema && (
          <Helmet>
            <link
              rel="stylesheet"
              type="text/css"
              href="/asciinema-player.css"
            />
            <script src="/asciinema-player.js" />
          </Helmet>
        )}

        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageFb={
            post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL
          }
          imageTw={
            post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL
          }
          lang={post.frontmatter.language}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Hero
          heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          title={post.frontmatter.title}
          subtitle={post.frontmatter.subtitle}
          date={post.frontmatter.date}
          authors={post.frontmatter.authors}
          coverLink={post.frontmatter.coverLink}
          coverDescription={post.frontmatter.coverDescription}
        />

        <Wrapper>
          <Article post={post} />
        </Wrapper>

        {post.frontmatter.comments && (
          <Wrapper>
            <Disqus
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
            />
            <PrevNextPost previous={previous} next={next} />
          </Wrapper>
        )}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        subtitle
        date(formatString: "YYYY-MM-DD")
        slug
        language
        tags
        authors
        comments
        cover {
          publicURL
        }
        coverLink
        coverDescription
        imageTw {
          publicURL
        }
        imageFb {
          publicURL
        }
        asciinema
      }
    }
  }
`
