import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import posed from 'react-pose';

import { BackIcon } from '../atoms/icon';
import { Title } from "../atoms/text"
import Link from "../atoms/link";
import Navigation from "../molecules/navigation";

const FadeIn = posed.div({
  "home-entering": {
    opacity: 1,
    delay:0
  },
  "home-entered": {
    opacity: 0,
    delay:0
  },
  "home-exiting": {
    opacity: 0,
    delay:0
  },
  "home-exited": {
    opacity:1,
    delay: 0,
  },
  entering: {
    opacity: 1
  },
  entered: {
    opacity:1,
  },
  exiting: {
    opacity:1
  },
  exited: {
    opacity:1
  }
})

const Header = ({ siteTitle, transitionStatus, socialMedia, className }) => {
  console.log(transitionStatus)
  const links = [
    {
      url: '/what-i-do',
      text: 'what i do'
    },
    {
      url: '/projects',
      text: 'projects'
    },
    {
      url: '/hire-me',
      text: 'hire me!'
    }
  ]
  return (
    <header className={classNames("header", className)}>
      <Title tag="h1">
        <Link
          transition
          to="/"
          entry={{ delay: 0.3 }}
          exit={{ length: 0.3 }}
        >
          {siteTitle}
        </Link>
      </Title>
      <FadeIn pose={transitionStatus}>
        <Link 
          transition
          className="link link--home" 
          activeClassName="link--active" 
          to="/"
          entry={{ delay: 0.3 }}
          exit={{ length: 0.3 }}
        >
          <><BackIcon className="small" /> Back to Home</>
        </Link>
      </FadeIn>
      
      <Navigation
        links={links}
        LinkProps={{ 
          transition: true, 
          entry: { delay: 0.5 },
          exit: { length: 1 }
        }}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
