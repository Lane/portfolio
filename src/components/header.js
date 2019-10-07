import { Link } from "gatsby"
import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import SocialIcon, { BackIcon } from './icons';

const Header = ({ siteTitle, socialMedia, className }) => {
  return (
    <header className={classNames("header", className)}>
      <h1 className="header__title">
        {siteTitle}
      </h1>
      <Link className="link link--home" to="/">
        <BackIcon className="small" /> Back to Home
      </Link>
      <nav className="header__links">
        <ul className="links links--nav">
          <li>
            <Link className="link" activeClassName="link--active" to="/what-i-do">what I do</Link>
          </li>
          <li>
            <Link className="link" activeClassName="link--active" to="/projects">projects</Link>
          </li>
          <li>
            <Link className="link" activeClassName="link--active" to="/technologies">technologies</Link>
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
