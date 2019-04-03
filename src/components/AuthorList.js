import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  color: #787676;
`

const AuthorListItem = styled(Link)`
  margin-left: 0.3rem;
  color: #787676;

  &:hover {
    border-bottom: 1px dotted #787676;
  }
  &:before {
    content: '@';
  }
`

class AuthorList extends React.Component {
  render() {
    const { authors } = this.props

    return (
      <ListContainer>
        {authors.map((author, i) => {
          return (
            <Fragment key={`author-list-${i}`}>
              <AuthorListItem to={`authors/${author}`}>{author}</AuthorListItem>
              {i < authors.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}
export default AuthorList
