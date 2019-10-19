import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/block"

// product developer, interface designer, team leader

const WhatIDoPage = ({transitionStatus}) => {
  const [activeBlock, setActiveBlock] = useState('design')
  return (
    <Layout className="page--what-i-do">
      <SEO title="what i do" />
      <Section>
        <div className="section__left">
          <PageOverview
            title="what i do"
            items={['design', 'development', 'management', 'consulting' ]}
            active={activeBlock}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>

          <PageContent transitionStatus={transitionStatus}>
            <Block 
              enterOffset={0}
              onEnter={() => setActiveBlock('design')} 
              id="design"
            >
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
            </Block>

            <Block 
              id="development"
              onEnter={() => setActiveBlock('development')} 
            >
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
            </Block>

            <Block 
              id="management"
              onEnter={() => setActiveBlock('management')} 
            >
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
            </Block>

            <Block 
              id="consulting"
              onEnter={() => setActiveBlock('consulting')} 
            >
              <h2>consulting</h2>
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
            </Block>
          </PageContent>
        </div>
      </Section>
    </Layout>
  )
}

export default WhatIDoPage
