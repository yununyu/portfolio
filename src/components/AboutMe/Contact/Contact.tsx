import React from 'react'
import {Title, Subheading, PS, commonStyles} from '../../../styles/index'
import {PersonalStatement} from '../../index'

export const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-start lg:flex-row lg:items-center lg:px-6">
        <Title text="CONTACT"></Title>
      </div>
      <div className="grid grid-cols-2">
        <div className="mt-4 ml-20">
          {PersonalStatement.map((statement, index) => (
            <div key={index}>
              <PS text={statement}></PS>
            </div>
          ))}
        </div>

        <div className="leading-7">
          <p className="break-all">
            <Subheading text="Email"></Subheading>
            <span className="text-sm underline">essfree10@gmail.com</span>
          </p>
          <p className="break-all">
            <Subheading text="PhoneNumber"></Subheading>
            <span className="text-sm underline">010-2305-3385</span>
          </p>
          <p className="break-all">
            <Subheading text="GitHub"></Subheading>
            <a
              href="https://github.com/yununyu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline">
              https://github.com/yununyu
            </a>
          </p>
          <p className="break-all">
            <Subheading text="Notion"></Subheading>
            <a
              href="https://www.notion.so/0f4499262a7a43f78b0360f09ecbf7b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline">
              https://www.notion.so/0f4499262a7a43f78b0360f09ecbf7b3
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
