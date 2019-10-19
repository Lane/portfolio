import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/block"
import slugify from 'slugify';
import * as moment from 'moment';


const getTasks = (distribution) => {
  return distribution.reduce((acc, curr) => {
    return [ ...acc, ...curr.tasks ]
  }, [])
}

const getTechnologies = (distribution) => {
  return distribution.reduce((acc, curr) => {
    return [ ...acc, ...curr.technologies ]
  }, [])
}

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
                  className="project"
                  id={item.slug}
                  onEnter={() => setActive(item.name) }
                >
                  <div className="summary">
                    <h2>{item.name}</h2>
                    <ul className="list list--inline condensed">
                      <li>
                        <span>Client:</span>
                        {item.client}
                      </li>
                      <li>
                        <span>Launched:</span>
                        {moment(item.end).format("MMMM YYYY")}</li>
                    </ul>
                    <p dangerouslySetInnerHTML={{'__html': item.summary}}></p>
                  </div>
                  <div className="details">

                    <div className="callout">
                      <p>Contributed to the following tasks in this project:</p>
                      <ul className="list list--comma">
                        {
                          getTasks(item.distribution).map((task, i) => 
                            <li key={i}>{task}</li>
                          )
                        }
                      </ul>
                    </div>
                    
                    <div className="callout">
                      <p>Utilized the following languages, frameworks, tools, and technologies:</p>
                      <ul className="list list--comma">
                        {
                          getTechnologies(item.distribution).map((tech, i) => 
                            <li key={i}>{tech}</li>
                          )
                        }
                      </ul>
                    </div>
                  </div>
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
