import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/block"

const TechnologiesPage = ({transitionStatus, data}) => {
  const items = data.allTechnologiesJson.edges.map(
    (n) => n.node
  )
  const itemNames = items.map((n) => n.name)
  return (
    <Layout className="page--technologies">
      <SEO title="Technologies" />
      <Section className="technologies">
        <div className="section__left">
          <PageOverview
            title="technologies"
            items={itemNames}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>

          <PageContent transitionStatus={transitionStatus}>
            <div className="block">
              {
                items.map((item, i) => 
                  <Block key={i}>
                    <h2 key={i}>{item.name}</h2>
                    <ul className="list">
                      { 
                        item.items && item.items.map((child, j) =>
                          <li key={j}>{child}</li>
                        )
                      }
                    </ul>
                  </Block>
                )
              }
            </div>
          </PageContent>
        </div>
      </Section>
    </Layout>
  )
}

export default TechnologiesPage

export const query = graphql`
  query {
    allTechnologiesJson {
      edges {
        node {
          name
          items
        }
      }
    }
  }
`
