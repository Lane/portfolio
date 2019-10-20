import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize } from '../../hooks/useWindowSize';

const Block = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={
        classNames("block", className)
      }
      {...rest}
    />
  )
})

/**
 * A container that triggers callbacks when
 * entering / exiting the viewport
 */
export const ScrollBlock = ({
  id, 
  className,
  onEnter, 
  onExit,
  enterOffset, 
  exitOffset, 
  ...rest
}) => {

  /** reference to the block DOM element */
  const blockEl = useRef(null);

  /** track active state for block */
  const [active, setActive] = useState(false);

  /** window size used for setting active state with offset */
  const size = useWindowSize();
  
  /** use scroll position to determine active state */
  useScrollPosition(({prevPos, currPos}) => {
    if (!blockEl.current || (!onEnter && !onExit)) return;
    const elRect = blockEl.current.getBoundingClientRect();
    const fromBottom =  size.height - elRect.bottom;
    const fromTop = elRect.top;
    const before = fromTop > (enterOffset ? size.height * enterOffset : size.height);
    const after = fromBottom > (exitOffset ? size.height * exitOffset : size.height);
    const isActive = !before && !after;
    if (isActive !== active) {
      setActive(isActive)
      isActive ? 
        (onEnter && onEnter(id)) : 
        (onExit && onExit(id))
    }
  
  }, [onEnter, blockEl, active], null, false, 200)

  return (
    <Block
      id={id}
      ref={blockEl}
      className={
        classNames(
          className,
          { "block--active": active }
        )
      }
      {...rest}
    />
  )
}

ScrollBlock.defaultProps = {
  enterOffset: 0.5,
  exitOffset: 0.5
}

ScrollBlock.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onEnter: PropTypes.func,
}

export default Block
