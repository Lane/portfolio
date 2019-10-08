import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose';
import slugify from 'slugify';


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

const PageOverview = ({ title, items, links=true, transitionStatus, ...rest}) => {
  return (
    <Parent className="page-overview" pose={transitionStatus}>
      <h1>{ title }</h1>
      { links ?
          <ul className="links links--vertical">
            {
              items.map((item, i) =>
                <Item key={i}>
                  <a className="link" href={'#' + slugify(item, { lower: true })}>{item}</a>
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
    </Parent>
  )
}

PageOverview.propTypes = {

}

export default PageOverview
