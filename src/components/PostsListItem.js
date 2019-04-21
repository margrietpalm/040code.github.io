import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag/Flag'
import TagList from './TagList'
import AuthorList from './AuthorList'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
  margin-bottom: 2rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;

  &:hover {
    background-color: rgba(32, 35, 42, 0.85);
    border-radius: 0.25rem;
    color: #fff;
  }
`

const PostDate = styled.time`
  color: #787676;
  &:before {
    content: '🗓';
    margin-right: 0.2rem;
  }
`

const PostHeader = styled.header`
  padding: 0em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  font-size: 1.6rem;  
  font-weight: bold;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  &:hover {
    border-bottom: 1px dotted rgba(34, 34, 34, 0.8);
  }
`
const PostSubTitle = styled.p`
  padding: 0.8rem 0;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: italic;
  font-size: 1.2rem;  
`

class PostsListItem extends React.Component {
  render() {
    const { title, subtitle, slug, date, language, tags, authors } = this.props

    return (
      <Post>
        <PostHeader>
          <h2>
            <PostTitleLink to={slug}>
              {siteConfig.multilangPosts && <Flag language={language} />}
              {title}
            </PostTitleLink>
          </h2>
        </PostHeader>
        <section>
          <PostSubTitle>{subtitle}</PostSubTitle>
        </section>
        <footer>
          <TagList tags={tags} icon={true} />
          <PostDate>{date}</PostDate>
          <AuthorList authors={authors} />
          {/* <ReadPost to={slug}>Read post ›</ReadPost> */}
        </footer>
      </Post>
    )
  }
}
export default PostsListItem

