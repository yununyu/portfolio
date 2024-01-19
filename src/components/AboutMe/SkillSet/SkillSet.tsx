import React from 'react'
import {Title, Ul, Description, commonStyles, Subheading} from '../../../styles'
import {skills} from './skills'
import Accordion from 'react-bootstrap/Accordion'

export const SkillSet = () => {
  return (
    <div className="grid grid-rows-1 mt-8 lg:px-6">
      <Title text="SKILLS"></Title>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className={`grid grid-cols-2 ${commonStyles.tableRow}`}>
            <div>
              <Subheading text={skill.name}></Subheading>
            </div>
            <div className="col-span-3 mt-4 md:mt-0">
              <Accordion defaultActiveKey="null">
                {skill.data.map((data, subIndex) => (
                  <Accordion.Item key={subIndex} eventKey={subIndex.toString()}>
                    <Accordion.Header>
                      <Subheading text={data.title}></Subheading>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Description text={data.content}></Description>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
