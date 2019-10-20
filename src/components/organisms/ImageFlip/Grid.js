import React, {useRef, useMemo} from 'react'
import PropTypes from 'prop-types'

const getSquarePropsByIndex = ({ dimensions, count, index }) => {
  const width = dimensions.width / count;
  const height = dimensions.height / count;
  const x = (index % count) * width;
  const y = Math.floor(index / count) * height;
  return {
    width,
    height,
    x,
    y
  }
}

const Block = ({ background, width, height, x, y}) => {
  return (
    <div 
      style={{
        background,
        width,
        height,
        top: x + 'px',
        left: y + 'px'
      }}
    />
  )
}

const Grid = ({ count, direction, flipTo}) => {
  const el = useRef(null);
  const dimensions = useMemo(() => {
    (el && el.current)
      ? { width: el.current.clientWidth, height: el.current.clientHeight }
      : { width: 1, height: 1 }
  })

  return (
    <div ref={el} className="grid">
      {
        (new Array(count)).fill().map((item, i) =>
          <Block 
            background={background}
            {...getSquarePropsByIndex(dimensions, count, i)}
          />
        )
      }
    </div>
  )
}

Grid.propTypes = {

}

export default Grid
