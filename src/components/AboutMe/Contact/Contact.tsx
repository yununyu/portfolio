import {FC, PropsWithChildren, HTMLAttributes} from 'react'
import {SubTitle} from '../../index'

type ContactProps = {}

export const Contact: FC<PropsWithChildren<ContactProps>> = props => {
  return (
    <div className="grid grid-rows-1 gap-5 lg:px-6">
      <SubTitle text="CONTACT"></SubTitle>
      <div className="leading-7">
        <p className="break-all">
          <span className="mr-2 font-bold text-[#8EB682] text-sm">Facebook</span>
          <a
            href="https://github.com/yununyu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            https://github.com/yununyu
          </a>
        </p>
        <p className="break-all">
          <span className="mr-2 font-bold text-[#8EB682] text-sm">Email</span>
          <a
            href="essfree10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            essfree10@gmail.com
          </a>
        </p>
        <p className="break-all">
          <span className="mr-2 font-bold text-[#8EB682] text-sm">PhoneNumber</span>
          <span className="text-xs underline">010-2305-3385</span>
        </p>
      </div>
    </div>
  )
}
