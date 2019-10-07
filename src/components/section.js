import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children, className, title, ...rest}) => {
  return (
    <section 
      className={"section " + className} 
      {...rest}
    >
      <div className="section__content">
        { title && <h2 className="section__title">{title}</h2> }
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
