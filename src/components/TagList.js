import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  color: #787676;
`

const TagListItem = styled(Link)`
  margin-left: 0.3rem;

  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;

  &:hover {
    border-bottom: 1px dotted #787676;
  }

`

class TagList extends React.Component {
  render() {
    const { tags, icon } = this.props

    return (
      <ListContainer>
        {icon === true && <Fragment>🏷 </Fragment>}
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              <TagListItem className="w3-round-size" to={`tags/${tag}`}>{tag}</TagListItem>
              {i < tags.length - 1 ? ' ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}
export default TagList
