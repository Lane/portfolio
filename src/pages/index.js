import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import { Link } from "gatsby"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/block"

// product developer, interface designer, team leader

const IndexPage = (props) => (
  <Layout className="home">
    <SEO title="home" />
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
          <Block id="home">
            <p className="text bigger">I create accessible applications, <br />user interfaces, and design systems.</p>
            <p className="text small">...but also, so much more! Take a look:</p>
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
          </Block>
        </PageContent>
      </div>    
    </Section>

  </Layout>
)

export default IndexPage
