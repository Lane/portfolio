import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'

const Hero = ({children, ...rest}) => {
  return (
    <Section className="hero" {...rest}>
      {children}
    </Section>
  )
}

Hero.propTypes = {

}

export default Hero
