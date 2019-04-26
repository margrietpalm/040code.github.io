import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { slide as BurgerMenu } from 'react-burger-menu'



const StyledBurgerMenu = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #ffffff;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #ffffff;
  }

  /* General sidebar styles */
  .bm-menu {
    background: rgb(0,0,0,0.5);
    padding: 2.5em 1em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    padding-top: 2em;
    ${'' /* color: #b8b7ad; */}
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    padding: 0.5em;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;


const MenuLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

class Header extends React.Component {
  render() {
    const { headerLinks } = this.props

    return (
      <StyledBurgerMenu>
        <BurgerMenu>
          {headerLinks.map((headerLink, i) => (
            <MenuLink to={headerLink.url} key={`header-link-${i}`}>
              {headerLink.label}
            </MenuLink>
          ))}
        </BurgerMenu>
      </StyledBurgerMenu>
    )
  }
}

export default Header
