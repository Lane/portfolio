import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem } from '../atoms/list'

const SocialLinks = ({socials}) => {
  return (
    <List links className="list--social">
      {
        socials.map(({id, url}) =>
          <ListItem key={id}>
            <a className="link" href={url} target="_blank" rel="noopener noreferrer">
              <SocialIcon className="icon" icon={id} />
            </a>
          </ListItem>
        )
      }
    </List>
  )
}

SocialLinks.propTypes = {

}

export default SocialLinks
