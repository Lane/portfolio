/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./organisms/header"
import "../styles/index.css"
import { TransitionPortal } from "gatsby-plugin-transition-link";

const Layout = ({ children, className, page, ...rest }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          socialMedia {
            id
            url
          }
        }
      }
    }
  `)

  return (
    <div className={classNames("page", "page--" + page, className)} {...rest}>
      <TransitionPortal>
        <Header
          className="page__header"
          siteTitle={data.site.siteMetadata.title} 
          socialMedia={data.site.siteMetadata.socialMedia}
        />
      </TransitionPortal>
      <main className="page__main">{children}</main>
      <footer className="page__footer"></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  className: ''
}

export default Layout
