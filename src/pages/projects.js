import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/block"
import slugify from 'slugify';

const ProjectsPage = ({transitionStatus, data}) => {
  
  const items = data.allPortfolioJson.edges.map(
    (n) => Object.assign(
      { slug: slugify(n.node.name, { lower: true }) }, 
      n.node
    )
  )

  const itemNames = items.map(
    (n) => n.name
  )

  const [active, setActive] = useState(itemNames[0])

  return (
    <Layout className="page--projects">
      <SEO title="projects" />
      <Section className="projects">
        <div className="section__left">
          <PageOverview
            title="projects"
            items={itemNames}
            active={active}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>
          <PageContent transitionStatus={transitionStatus}>
            {
              items.map((item, i) => 
                <Block
                  key={i}
                  id={item.slug}
                  onEnter={() => setActive(item.name) }
                >
                  <h2>{item.name}</h2>
                  <p>{item.summary}</p>
                </Block>
              )
            }
          </PageContent>
        </div>
      </Section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query {
    allPortfolioJson(filter: {featured: {eq: true}}) {
      edges {
        node {
          client
          end
          name
          start
          summary
          tasks
          technologies
          type
        }
      }
    }
  }
`
