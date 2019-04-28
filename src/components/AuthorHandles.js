import React, { Fragment } from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  .social-item {
    padding: 0.25rem 0.25rem;
    color: #ffffff;
    font-size: 2em;
  }
  `
class AuthorHandles extends React.Component {

  
  render() {
    const { github, linkedin, twitter, email } = this.props.author.frontmatter
    
    const TwitterLink = ({ handle }) => {
      return (
        <span className="social-item" >
          <a className="social-link" href={`https://twitter.com/${handle}`}>
            <FaTwitter />
          </a>
        </span>
      )
    }

    const GithubLink = ({ handle }) => {
      return (
        <span className="social-item" >
          <a className="social-link" href={`https://github.com/${handle}`}>
            <FaGithub />
          </a>
        </span>
      )
    }

    const LinkedinLink = ({ handle }) => {
      return (
        <span className="social-item" >
          <a className="social-link" href={`https://www.linkedin.com/in/${handle}`}>
            <FaLinkedin />
          </a>
        </span>
      )
    }

    const EmailLink = ({ handle }) => {
      return (
        <span className="social-item" >
          <a className="social-link" href={`mailto:${handle}`}>
            <FaEnvelope />
          </a>
        </span>
      )
    }

    return (
      <SocialWrapper>
          <TwitterLink handle={twitter} />
          <GithubLink handle={github} />
          <LinkedinLink handle={linkedin} />
          <EmailLink handle={email} />
      </SocialWrapper>
    )
  }
}
export default AuthorHandles 
