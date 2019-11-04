import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/section"
import { Link } from "gatsby"
import PageOverview from "../components/page-overview"
import PageContent from "../components/page-content"
import Block from "../components/atoms/block"
import { Paragraph } from "../components/atoms/text"
import List, { ListItem } from "../components/atoms/list"


const IndexPage = (props) => (
  <Layout page="home">
    <SEO title="home" />
    <Section>
      <div className="section__left">
        <PageOverview
          title="lane olson"
          items={['product developer', 'interface designer' ]}
          transitionStatus={props.transitionStatus}
        />
      </div>
      <div className="section__right">

        <PageContent transitionStatus={props.transitionStatus}>
          <Block id="home">
            <Paragraph size="bigger">I create accessible applications, <br />user interfaces, and design systems.</Paragraph>
            <Paragraph>...but also, so much more! Take a look:</Paragraph>
            <List>
              <ListItem>
                <Link to="/what-i-do">Read about <strong>what I do</strong> and how I can help with your project</Link>
              </ListItem>
              <ListItem>
                <Link to="/projects">See the <strong>projects</strong> I have recently worked on</Link>
              </ListItem>
              <ListItem>
                <Link to="/technologies">View the <strong>technologies</strong> and processes I use in my work</Link>
              </ListItem>
            </List>
          </Block>
        </PageContent>
      </div>    
    </Section>

  </Layout>
)

export default IndexPage
