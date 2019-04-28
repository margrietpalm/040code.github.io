import React from 'react'
import styled from 'styled-components'
import Content from './Content'

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <ArticleWrapper>
        <Content
          content={post.html}
          tags={post.frontmatter.tags}
        />
      </ArticleWrapper>
    )
  }
}

export default Article
