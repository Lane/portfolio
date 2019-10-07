import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

// product developer, interface designer, team leader

const IndexPage = () => (
  <Layout className="home">
    <SEO title="Home" />
    <Hero>
      <p>
         
      </p>
    </Hero>
    <Section 
      className="about-me" 
    >
      <p className="big">I create accessible applications, user interfaces, and design systems.</p>
      <p className="small">But that is only the beginning...</p>
      <ul>
        <li><strong>Develop</strong> interactive components for comprehension of complex topics and datasets.</li>
        <li><strong>Process</strong>, clean, and transform datasets for use in maps, charts, and public APIs.</li>
        <li><strong>Manage</strong> team efforts and implement efficient workflows for large projects.</li>
        <li><strong>Write</strong> and maintain project documentation and specifications.</li>
        <li><strong>Automate</strong> reporting, deployment, and workflows to keep teams efficient.</li>
      </ul>
    </Section>
    <Section 
      className="technologies" 
      title="Technologies"
    >
      
      <div className="grid">
      
        <div className="grid-item">
          <h3>Accessibility</h3>
          <ul className="list">
            <li>Semantic HTML</li>
            <li>Accessible Rich Internet Applications (ARIA)</li>
            <li>VoiceOver</li>
            <li>NVDA</li>
            <li>WCAG 2.1</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>User Experience</h3>
          <ul className="list">
            <li>Moderated User Testing</li>
            <li>User Surveys</li>
            <li>Figma Prototypes</li>
            <li>InVision</li>
            <li>Usability Hub</li>
            <li>A/B Tests</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>Javascript</h3>
          <ul className="list">
            <li>React (w/ hooks)</li>
            <li>Redux</li>
            <li>Angular</li>
            <li>D3</li>
            <li>Ionic</li>
            <li>jQuery</li>
            <li>Node</li>
            <li>NPM</li>
            <li>Babel</li>
            <li>Webpack</li>
            <li>Gulp</li>
            <li>Mapbox GL</li>
            <li>Cordova</li>
            <li>Karma</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>CSS</h3>
          <ul className="list">
            <li>Flexbox</li>
            <li>CSS Grid</li>
            <li>Media Queries</li>
            <li>SASS</li>
            <li>LESS</li>
            <li>Stylus</li>
            <li>Emotion</li>
            <li>CSS Modules</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
            <li>BEM</li>
            <li>OOCSS</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>Data Processing</h3>
          <ul className="list">
            <li>Python</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>csvkit</li>
            <li>Bash scripting</li>
            <li>GNU Make</li>
            <li>GDAL</li>
            <li>Tippecanoe</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>Infrastructure</h3>
          <ul className="list">
            <li>Docker</li>
            <li>AWS (EC2, ECS, S3, CloudFront, Gateway, Lambda)</li>
            <li>Google App Engine </li>
            <li>Firebase</li>
            <li>Surge</li>
            <li>Heroku</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>CMS / Static Generators</h3>
          <ul className="list">
            <li>Hugo</li>
            <li>Jekyll</li>
            <li>Gatsby</li>
            <li>Ghost</li>
            <li>Wordpress</li>
            <li>Netlify CMS</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>Design Tools &amp; Guidelines</h3>
          <ul className="list">
            <li>Figma</li>
            <li>Sketch</li>
            <li>Photoshop</li>
            <li>Atomic Design</li>
            <li>PatternLab</li>
            <li>Material Design</li>
            <li>Human Interface Guidelines</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>Management</h3>
          <ul className="list">
            <li>Notion</li>
            <li>Trello</li>
            <li>Github</li>
            <li>JIRA</li>
            <li>Confluence</li>
            <li>Basecamp</li>
            <li>Harvest</li>
            <li>G-Suite</li>
          </ul>
        </div>

        <div className="grid-item">
          <h3>Monitoring &amp; Automation</h3>
          <ul className="list">
            <li>Travis CI</li>
            <li>Puppeteer</li>
            <li>Browserstack</li>
            <li>IFTTT</li>
            <li>Splunk</li>
          </ul>
        </div>

      </div>
    </Section>
    <Section title="Work">
      <p>List of work</p>
    </Section>
    <Section title="Contact">
      <p>Contact info</p>
    </Section>
  </Layout>
)

export default IndexPage
