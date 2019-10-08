import React from "react"
import { TransitionState } from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { Link } from "gatsby"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"

// product developer, interface designer, team leader

const IndexPage = (props) => (
  <Layout className="home">
    <SEO title="Home" />
    <Section 
      className="about" 
    >
      <div className="section__left">
        <PageOverview
          title="lane olson"
          items={['product developer', 'interface designer', 'team leader' ]}
          links={false}
          transitionStatus={props.transitionStatus}
        />
      </div>
      <div className="section__right">

        <PageContent transitionStatus={props.transitionStatus}>
          <div className="block">
            <p className="text bigger">I create accessible applications, <br />user interfaces, and design systems.</p>
            <p className="text small">But that is only the beginning, take a look:</p>
            <ul className="list">
              <li>
                <Link to="/what-i-do">Read about <strong>what I do</strong> and how I can help with your project</Link>
              </li>
              <li>
                <Link to="/projects">See the <strong>projects</strong> I have recently worked on</Link>
              </li>
              <li>
                <Link to="/technologies">View the <strong>technologies</strong> and processes I use in my work</Link>
              </li>
            </ul>
          </div>
        </PageContent>
      </div>    
    </Section>

  </Layout>
)

export default IndexPage
