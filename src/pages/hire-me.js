import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/atoms/block"


const HireMePage = (props) => (
  <Layout className="hire-me">
    <SEO title="hire me" />
    <Section>
      <div className="section__left">
        <PageOverview
          title="hire me"
          items={['product developer', 'interface designer', 'team leader' ]}
          links={false}
          transitionStatus={props.transitionStatus}
        />
      </div>
      <div className="section__right">
        <PageContent transitionStatus={props.transitionStatus}>
          <Block id="hire-me">
            <p className="text bigger">Contact Info</p>
            
          </Block>
        </PageContent>
      </div>    
    </Section>

  </Layout>
)

export default HireMePage
