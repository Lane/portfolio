import React from 'react'
import { Title, Paragraph } from '../atoms/text'
import List, { ListItem } from '../atoms/list'
import { ScrollBlock } from '../atoms/block'
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

const CalloutList = ({label, items, ...rest}) => {
  return (
    <div className="callout">
      <Paragraph>{label}</Paragraph>
      <List comma>
        {
          items.map((item, i) => 
            <ListItem key={i}>{item}</ListItem>
          )
        }
      </List>
    </div>
  )
}

const Project = ({ data, ...rest }) => {
  return (
    <ScrollBlock
      className="project"
      id={data.slug}
      {...rest}
    >
      <div className="summary">
        <Title tag="h2">{data.name}</Title>
        <List inline className="text--alt">
          <ListItem>
            <span>Client:</span>
            {data.client}
          </ListItem>
          <ListItem>
            <span>Launched:</span>
            {moment(data.end).format("MMMM YYYY")}
          </ListItem>
        </List>
        <Paragraph dangerouslySetInnerHTML={{'__html': data.summary}}></Paragraph>
      </div>

      <div className="details">
        <CalloutList 
          label="Contributed to the following tasks in this project:"
          items={getTasks(data.distribution)}
        />
        <CalloutList 
          label="Contributed to the following tasks in this project:"
          items={getTechnologies(data.distribution)}
        />
      </div>
    </ScrollBlock>
  )
}

Project.propTypes = {

}

export default Project
