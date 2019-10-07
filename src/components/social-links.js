import React from 'react'
import PropTypes from 'prop-types'

const SocialLinks = props => {
  return (
    <ul className="links links--social">
      {
        socialMedia.map(({id, url}) =>
          <li key={id}>
            <a className="link" href={url} target="_blank" rel="noopener noreferrer">
              <SocialIcon className="icon" icon={id} />
            </a>
          </li>
        )
      }
    </ul>
  )
}

SocialLinks.propTypes = {

}

export default SocialLinks
