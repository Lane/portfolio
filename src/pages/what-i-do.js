import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import List, { ListItem } from "../components/atoms/list"
import { Paragraph, Title } from "../components/atoms/text"
import { ScrollBlock } from "../components/atoms/block"
import { getLinks } from "../utils/selectors"

// product developer, interface designer, team leader



const WhatIDoPage = ({transitionStatus}) => {
  const [activeBlock, setActiveBlock] = useState('design')
  const links = getLinks([
    'design', 
    'development', 
    'management', 
    'consulting'
  ])

  return (
    <Layout className="page--what-i-do">
      <SEO title="what i do" />
      <Section>
        <div className="section__left">
          <PageOverview
            title="what i do"
            links={links}
            active={activeBlock}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>

          <PageContent transitionStatus={transitionStatus}>
            <ScrollBlock 
              enterOffset={0}
              onEnter={() => setActiveBlock('design')} 
              id="design"
            >
              <Title tag="h2">visual, ux, and interaction design</Title>
              <Paragraph>
                My design approach goes further than how a product looks.  
                To me, how it works is just as important as how it looks, 
                so in each project I strive to:
              </Paragraph>
              <List>
                <ListItem>organize content and workflows so they are easily understood</ListItem>
                <ListItem>create accessible interfaces that are intuitive for all audiences</ListItem>
                <ListItem>mindfully use color, typography, layout, and movement to craft memorable experiences</ListItem>
                <ListItem>provide style guides and design systems for teams to use that elevate a cohesive brand for years to come</ListItem>
              </List>
                
            </ScrollBlock>

            <ScrollBlock 
              id="development"
              onEnter={() => setActiveBlock('development')} 
            >
              <Title tag="h2">full stack development</Title>
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
            </ScrollBlock>

            <ScrollBlock 
              id="management"
              onEnter={() => setActiveBlock('management')} 
            >
              <Title tag="h2">task and team management</Title>
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
            </ScrollBlock>

            <ScrollBlock 
              id="consulting"
              onEnter={() => setActiveBlock('consulting')} 
            >
              <Title tag="h2">consulting</Title>
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
            </ScrollBlock>
          </PageContent>
        </div>
      </Section>
    </Layout>
  )
}

export default WhatIDoPage
