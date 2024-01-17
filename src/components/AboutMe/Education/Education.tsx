import React from 'react'
import {
  SubTitle,
  Ul,
  Description,
  commonStyles,
  Subheading,
  Date
} from '../../../styles/index'
import {educations} from './educations'

export const Education = () => {
  return (
    <div className="grid grid-rows-1 gap-5 lg:px-6">
      <SubTitle text="EDUCATION"></SubTitle>
      <div>
        {educations.map((education, index) => (
          <div key={index} className={commonStyles.tableRow}>
            <div>
              <Subheading text={education.name}></Subheading>
              <Date text={education.date}></Date>
            </div>
            <Description text={education.detail}></Description>
          </div>
        ))}
      </div>
    </div>
  )
}