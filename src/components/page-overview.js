import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import posed from 'react-pose';
import slugify from 'slugify';
import ScrollLink from './scroll-link';
import { useWindowSize } from '../hooks/useWindowSize';
import { MarkerIcon } from './icons';


const Parent = posed.div({
  entering: {
    y: 0, 
    opacity: 1,
    staggerChildren: 50
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

const Item = posed.li({
  entering: { y: 0, opacity: 1 },
  exited: { y: 20, opacity: 0 }
});

const PageOverview = ({ title, items, active, links=true, transitionStatus, ...rest}) => {
  
  /** Use window size for scroll offset */
  const size = useWindowSize()

  /** Get the active block index for arrow placement */
  const activeIndex = items.findIndex((item) => item === active)
  
  /** Set scroll options */
  const scrollOptions = {
    offset: size.width > 840 ? 
      (-size.height / 2.57) : 
      -80
    ,
    ease: 'inOutQuad',
  }

  return (
    <Parent className="page-overview" pose={transitionStatus}>
      <h1>{ title }</h1>
      <div style={{position: 'relative'}}>
        <div 
          className='marker'
          style={{
            transform: `translateY(${activeIndex*100}%)`,
            height: `${100/items.length}%`
          }}
        ><MarkerIcon /></div>
        { links ?
            <ul className="links links--vertical">
              {
                items.map((item, i) =>
                  <Item key={i}>
                    <ScrollLink 
                      className={
                        classNames(
                          'link', 
                          { 'link--active': active === item}
                        )
                      }
                      options={scrollOptions}
                      anchorId={slugify(item, { lower: true })}
                    >
                      {item}
                    </ScrollLink>
                  </Item>
                )
              }
            </ul> :
            <ul className="list">
            {
              items.map((item, i) => 
                <Item key={i}>{item}</Item>
              )
            }
            </ul>
        }
      </div>
    </Parent>
  )
}

PageOverview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  active: PropTypes.string,
  links: PropTypes.bool,
  transitionStatus: PropTypes.string,
}

export default PageOverview
