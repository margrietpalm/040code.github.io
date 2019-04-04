import React from 'react'
import { withPrefix } from 'gatsby'
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

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 2px 2px #222222;
  font-weight: 800;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

const HeroSubtitle = styled.h2`
  font-weight: 700;
  font-size: 1.7rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 2px 2px #222222;
  font-weight: 600;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

class Hero extends React.Component {
  render() {
    const heroImg = this.props.heroImg || withPrefix(siteConfig.siteCover)
    const { title } = this.props
    const { subtitle } = this.props

    return (
      <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default Hero
