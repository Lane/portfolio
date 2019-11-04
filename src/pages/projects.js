import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import slugify from 'slugify';
import Project from "../components/organisms/project"
import { getLinks } from "../utils/selectors"

const ProjectsPage = ({transitionStatus, data}) => {
  
  const items = data.allPortfolioJson.edges.map(
    (n) => Object.assign(
      { slug: slugify(n.node.name, { lower: true }) }, 
      n.node
    )
  )

  const links = getLinks(items.map((n) => n.name))

  const [active, setActive] = useState(links[0].text)
  
  return (
    <Layout page="projects">
      <SEO title="projects" />
      <Section className="projects">
        <div className="section__left">
          <PageOverview
            title="projects"
            links={links}
            active={active}
            transitionStatus={transitionStatus}
          />
        </div>
        <div className="section__right">
          <div className="section__shade"></div>
          <PageContent transitionStatus={transitionStatus}>
            {
              items.map((item, i) => 
                <Project
                  key={i}
                  data={item}
                  onEnter={() => setActive(item.name) }
                />
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
          distribution {
            type
            value
            tasks
            technologies
          }
          client
          end
          name
          start
          summary
          type
        }
      }
    }
  }
`
