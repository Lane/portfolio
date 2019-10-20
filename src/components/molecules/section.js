import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../atoms/text'

const Section = ({children, className, title, ...rest}) => {
  return (
    <section 
      className={"section " + className} 
      {...rest}
    >
      <div className="section__content">
        { title && <Title tag="h2">{title}</Title> }
        { children }
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Section.defaultProps = {
  className: '',
}

export default Section
