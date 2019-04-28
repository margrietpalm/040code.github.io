import React, { Fragment, Image } from 'react'
import styled from 'styled-components'

import Content from './Content'
import AuthorHandles from './AuthorHandles'

const AuthorAvatar = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-size: cover;
  float: right;
`
class AuthorBio extends React.Component {
  render() {
    const { author } = this.props

    return (
      <Fragment>
        <AuthorAvatar style={{ backgroundImage: `url("${author.frontmatter.avatar.publicURL}")` }} />
        <AuthorHandles author={author}/>
        <Content
          content={author.html}
        />
      </Fragment>
    )
  }
}
export default AuthorBio 
