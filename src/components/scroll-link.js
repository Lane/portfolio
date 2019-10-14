import React from 'react'
import PropTypes from 'prop-types'
import * as scrollToElement from 'scroll-to-element'

const ScrollLink = ({anchorId, options, children, ...rest}) => {
  
  const handleClick = (e) => {
    scrollToElement('#' + anchorId, options)
  }
  return (
    <a 
      href={'#' + anchorId} 
      onClick={(e) => handleClick(e)} 
      {...rest}
    >
      {children}
    </a>
  )
}

ScrollLink.defaultProps = {
  options: {
    offset: -150,
    duration: 1000
  }
}

ScrollLink.propTypes = {
  anchorId: PropTypes.string,
}

export default ScrollLink
