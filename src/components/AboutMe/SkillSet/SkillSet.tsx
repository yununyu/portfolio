import {FC, PropsWithChildren} from 'react'
import {SubTitle, Ul, Description} from '../../../styles/index'
import {commonStyles, Subheading} from '../../../styles/index'
import React from 'react'
import {skills} from './skills'

type SkillSetProps = {}

export const SkillSet: FC<PropsWithChildren<SkillSetProps>> = props => {
  return (
    <div>
      <SubTitle text="SKILLS"></SubTitle>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className={commonStyles.tableRow}>
            <div>
              <Subheading text={skill.name}></Subheading>
            </div>
            <div className="col-span-4 mt-4 md:mt-0">
              <Ul>
                {skill.data.map((data, index) => (
                  <li key={index}>
                    <Description text={data}></Description>
                  </li>
                ))}
              </Ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
