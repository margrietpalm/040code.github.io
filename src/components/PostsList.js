import React, { Fragment } from 'react'

import PostsListItem from './PostsListItem'

class PostsList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            subtitle: post.node.frontmatter.subtitle,
            slug: post.node.frontmatter.slug,
            date: post.node.frontmatter.date,
            language: post.node.frontmatter.language || 'en',
            tags: post.node.frontmatter.tags || [],
            authors: post.node.frontmatter.authors || [],
          }
          return <PostsListItem key={props.slug} {...props} />
        })}
      </Fragment>
    )
  }
}
export default PostsList
