import {FC, PropsWithChildren} from 'react'
import {SubTitle, Subheading} from '../../../styles/index'

type ContactProps = {}

export const Contact: FC<PropsWithChildren<ContactProps>> = props => {
  return (
    <div className="grid grid-rows-1 gap-5 lg:px-6">
      <SubTitle text="CONTACT"></SubTitle>
      <div className="leading-7">
        <p className="break-all">
          <Subheading text="Email"></Subheading>
          <a
            href="essfree10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            essfree10@gmail.com
          </a>
        </p>
        <p className="break-all">
          <Subheading text="PhoneNumber"></Subheading>
          <span className="text-xs underline">010-2305-3385</span>
        </p>
        <p className="break-all">
          <span className="mr-2 font-bold text-[#8EB682] text-sm">GitHub</span>
          <a
            href="https://github.com/yununyu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            https://github.com/yununyu
          </a>
        </p>
        <p className="break-all">
          <Subheading text="Notion"></Subheading>
          <a
            href="https://www.notion.so/0f4499262a7a43f78b0360f09ecbf7b3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            https://www.notion.so/0f4499262a7a43f78b0360f09ecbf7b3
          </a>
        </p>
      </div>
    </div>
  )
}
