import { Link } from "gatsby"
import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

import SocialIcon, { BackIcon } from './icons';

const Header = ({ siteTitle, socialMedia, className }) => {
  return (
    <header className={classNames("header", className)}>
      <h1 className="header__title">
        {siteTitle}
      </h1>
      <TransitionLink 
        className="link link--home" 
        activeClassName="link--active" 
        to="/"
        entry={{ delay: 0.3 }}
        exit={{ length: 0.3 }}
      >
        <><BackIcon className="small" /> Back to Home</>
      </TransitionLink>
      <nav className="header__links">
        <ul className="links links--nav">
          <li>
            <TransitionLink 
              className="link" 
              activeClassName="link--active" 
              to="/what-i-do"
              entry={{ delay: 0.3 }}
              exit={{ length: 0.3 }}
            >
              what I do
            </TransitionLink>
          </li>
          <li>
            <TransitionLink 
              className="link" 
              activeClassName="link--active" 
              to="/projects"
              entry={{delay:0.5}}
              exit={{length: 1}}
            >
              projects
            </TransitionLink>
          </li>
          <li>
            <TransitionLink 
              className="link" 
              activeClassName="link--active" 
              to="/hire-me"
              entry={{delay:0.5}}
              exit={{length: 1}}
            >
              Hire me!
            </TransitionLink>
          </li>
        </ul>
      </nav>
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
