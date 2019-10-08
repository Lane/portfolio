import React from 'react'
import classNames from 'classnames'

const Block = ({className, children, ...rest}) => {
  return (
    <div className={classNames("block", className)} {...rest}>
      { children }
    </div>
  )
}

export default Block
