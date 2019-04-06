import React, { Fragment } from 'react'
import { withPrefix, Link } from 'gatsby'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const LocationContainer = styled.div`
  display: table-footer-group;
  vertical-align: center;
  text-align: right;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 2px 2px #222222;
  font-weight: 800;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

const HeroSubtitle = styled.h2`
  font-size: 1.7rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 2px 2px #222222;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

const DateAndAuthor = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 2px 2px #222222;
`

const AuthorLink = styled(Link)`
  margin-left: 0.3rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 2px 2px #222222;

  &:hover {
    border-bottom: 1px dotted #787676;
  }
  &:before {
    content: '@';
  }
`

const LocationLink = styled.a`
  margin-right: 0.7rem;
  font-size: 0.9rem;
  color: #fff;
  text-shadow: 2px 2px #222222;
  font-size: 1rem;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: italic;

  &:hover {
    border-bottom: 1px dotted #787676;
  }

`

const LocationMarker = styled.span`
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: #fff;
  text-shadow: 2px 2px #222222;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

class Hero extends React.Component {
  render() {
    const heroImg = this.props.heroImg || withPrefix(siteConfig.siteCover)
    const { title } = this.props
    const { subtitle } = this.props
    const { date } = this.props
    const { authors } = this.props
    const { coverDescription } = this.props
    const { coverLink } = this.props

    return (
      <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>

        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          {(authors) && (authors.length != 0) &&
            <DateAndAuthor>
            by: {authors && authors.map((author, i) => {
              return (
                <Fragment key={`author-list-${i}`}>
                  <AuthorLink to={`authors/${author}`}>{author}</AuthorLink>
                  {i < authors.length - 1 ? ' ' : ''}
                </Fragment>
              )
            })}
             &nbsp; on {date}</DateAndAuthor>
          }
        </TitleContainer>
        { (coverDescription) && (coverLink) &&
        <LocationContainer>
          <LocationMarker><span class="fa fa-map-marker-alt"></span></LocationMarker>
          <LocationLink href={coverLink} target="_blank">{coverDescription}</LocationLink>
        </LocationContainer>
        }
      </HeroContainer>
    )
  }
}

export default Hero
