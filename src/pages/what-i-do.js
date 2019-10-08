import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { Link } from "gatsby"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"

// product developer, interface designer, team leader

const WhatIDoPage = ({transitionStatus}) => {
  return (
    <Layout className="page--what-i-do">
      <SEO title="What I Do" />
      <Section className="what-i-do">
        <div className="section__left">
          <PageOverview
            title="what i do"
            items={['design', 'development', 'management', 'leadership' ]}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>

          <PageContent transitionStatus={transitionStatus}>
            <div className="block">
              <h2>visual, ux, and interaction design</h2>
              <p>
                My design approach goes further than how a product looks.  
                To me, how it works is just as important as how it looks, 
                so in each project I strive to:
              </p>
              <ul>
                <li>organize content and workflows so they are easily understood</li>
                <li>create accessible interfaces that are intuitive for all audiences</li>
                <li>mindfully use color, typography, layout, and movement to craft memorable experiences</li>
                <li>provide style guides and design systems for teams to use that elevate a cohesive brand for years to come</li>
              </ul>
            </div>

            <div className="block">
              <h2>full stack development</h2>
              <p>
                My design approach goes further than how a product looks.  
                To me, how it works is just as important as how it looks, 
                so in each project I strive to:
              </p>
              <ul>
                <li>organize content and workflows so they are easily understood</li>
                <li>create accessible interfaces that are intuitive for all audiences</li>
                <li>mindfully use color, typography, layout, and movement to craft memorable experiences</li>
                <li>provide style guides and design systems for teams to use that elevate a cohesive brand for years to come</li>
              </ul>
            </div>

            <div className="block">
              <h2>task and team management</h2>
              <p>
                My design approach goes further than how a product looks.  
                To me, how it works is just as important as how it looks, 
                so in each project I strive to:
              </p>
              <ul>
                <li>organize content and workflows so they are easily understood</li>
                <li>create accessible interfaces that are intuitive for all audiences</li>
                <li>mindfully use color, typography, layout, and movement to craft memorable experiences</li>
                <li>provide style guides and design systems for teams to use that elevate a cohesive brand for years to come</li>
              </ul>
            </div>

            <div className="block">
              <h2>leadership</h2>
              <p>
                My design approach goes further than how a product looks.  
                To me, how it works is just as important as how it looks, 
                so in each project I strive to:
              </p>
              <ul>
                <li>organize content and workflows so they are easily understood</li>
                <li>create accessible interfaces that are intuitive for all audiences</li>
                <li>mindfully use color, typography, layout, and movement to craft memorable experiences</li>
                <li>provide style guides and design systems for teams to use that elevate a cohesive brand for years to come</li>
              </ul>
            </div>
          </PageContent>
        </div>
      </Section>
    </Layout>
  )
}

export default WhatIDoPage
