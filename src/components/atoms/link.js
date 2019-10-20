import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link as RouterLink } from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"
import * as scrollToElement from 'scroll-to-element'

/**
 * Scrolls to a provided anchor on page when pressed
 */
export const ScrollLink = ({
  to, 
  className, 
  scrollOptions, 
  active, 
  activeClassName, 
  children, 
  ...rest
}) => {
  return (
    <a
      className={classNames("link", className, { [activeClassName]: active })}
      href={to}
      onClick={(e) => scrollToElement(to, scrollOptions)} 
      {...rest}
    >
      {children}
    </a>
  )
}

ScrollLink.defaultProps = {
  scrollOptions: {
    offset: -150,
    duration: 1000,
  },
  active: false,
  activeClassName: 'link--active',
}

ScrollLink.propTypes = {
  to: PropTypes.string,
  active: PropTypes.bool,
  activeClassName: PropTypes.string,
}


/**
 * Universal Link
 */
const Link = ({ transition, scroll, className, ...rest }) => {
  const LinkComponent = transition ? TransitionLink : 
    ( scroll ? ScrollLink : RouterLink );

  return (
    <LinkComponent 
      className={classNames("link", className)} 
      {...rest} 
    />
  )
}

Link.propTypes = {
  transition: PropTypes.any,
  className: PropTypes.string,
}

export default Link
