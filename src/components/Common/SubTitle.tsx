import React, {FC} from 'react'

type SubTitleProps = {
  text: string
}

export const SubTitle: FC<SubTitleProps> = ({text}) => {
  return <p className="text-2xl font-bold tracking-wide text-[#609966]">{text}</p>
}
