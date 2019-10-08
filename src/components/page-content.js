import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose';

const Parent = posed.div({
  entering: {
    y: 0, 
    opacity: 1,
    delay: 400,
  },
  entered: { 
    y: 0, 
    opacity: 1,
  },
  exited: { 
    y: 20, 
    opacity: 0,
  },
  exiting: {
    y: -60,
    opacity:0,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'linear', duration: 500 }
    }
  }
})

const PageContent = ({children, transitionStatus}) => {
  return (
    <Parent className="page-content" pose={transitionStatus}>
      {children}
    </Parent>
  )
}

PageContent.propTypes = {

}

export default PageContent
