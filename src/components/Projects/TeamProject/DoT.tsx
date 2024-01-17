import React from 'react'
import {SubTitle, Subheading} from '../../../styles/index'

export const DoT = () => {
  return (
    <div className="grid grid-rows-1 gap-4 mb-20 lg:px-6">
      <SubTitle text="CONTACT"></SubTitle>
      <div className="leading-7">
        <p className="break-all">
          <Subheading text="GitHub"></Subheading>
          <a
            href="https://github.com/yununyu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            https://github.com/yununyu
          </a>
        </p>
      </div>
    </div>
  )
}
