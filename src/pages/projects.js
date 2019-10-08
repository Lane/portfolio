import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"

const ProjectsPage = ({transitionStatus, data}) => {
  const itemNames = data.allPortfolioJson.edges.map(
    (n) => n.node.name
  )
  return (
    <Layout className="page--projects">
      <SEO title="Projects" />
      <Section className="projects">
        <div className="section__left">
          <PageOverview
            title="projects"
            items={itemNames}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>
          <PageContent transitionStatus={transitionStatus}>
            <div className="block">
              <h2>project name</h2>
              <p>
                My design approach goes further than how a product looks.  
                To me, how it works is just as important as how it looks, 
                so in each project I strive to:
              </p>
              
            </div>
          </PageContent>
        </div>
      </Section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query {
    allPortfolioJson {
      edges {
        node {
          name
        }
      }
    }
  }
`
