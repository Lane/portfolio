import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose';
import { useWindowSize } from '../hooks/useWindowSize';
import { MarkerIcon } from './atoms/icon';
import { Title } from './atoms/text';
import List from './atoms/list';
import Navigation from './molecules/navigation';

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

const PageOverview = ({ 
  title, 
  items, 
  active, 
  links, 
  children, 
  transitionStatus, 
  ...rest
}) => {
  
  /** Use window size for scroll offset */
  const size = useWindowSize()

  /** Get the active block index for arrow placement */
  const activeIndex = links && links.findIndex((link) => link.text === active)
  
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
      <Title tag="h1">{ title }</Title>
      <div style={{position: 'relative'}}>
        { activeIndex > -1 &&
          <div 
            className='marker'
            style={{
              transform: `translateY(${activeIndex*100}%)`,
              height: `${100/links.length}%`
            }}
          >
            <MarkerIcon />
          </div>
        }
        { 
          links &&
            <Navigation
              links={links}
              active={active}
              ListItemComponent={Item}
              ListProps={{ vertical: true }}
              LinkProps={{
                scroll: true,
                scrollOptions
              }}
            />
        }
        {
          items &&
            <List vertical>
              {
                items.map((item, i) =>
                  <Item key={i}>
                    {item}
                  </Item>
                )
              }
            </List>
        }
        { children }
      </div>
    </Parent>
  )
}

PageOverview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  active: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  transitionStatus: PropTypes.string,
}

export default PageOverview
