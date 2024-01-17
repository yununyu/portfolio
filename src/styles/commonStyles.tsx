import React, {FC} from 'react'
import {ReactElement} from 'react'

type TextProps = {
  text: string
}
type Props = {
  children: ReactElement[]
}

export const SubTitle: FC<TextProps> = ({text}) => {
  return <p className="text-2xl font-bold tracking-wide text-[#609966]">{text}</p>
}

export const Subheading: FC<TextProps> = ({text}) => {
  return <span className="m-2 font-bold text-[#8EB682] text-base">{text}</span>
}

export const Description: FC<TextProps> = ({text}) => {
  return <span className="my-6 font-serif text-xs text-gray-600">{text}</span>
}

export const Date: FC<TextProps> = ({text}) => {
  return <span className="font-serif text-xs text-gray-500">{text}</span>
}

export const Ul = (props: Props) => {
  const {children} = props

  return <ul className="list-inside">{children}</ul>
}

export const commonStyles = {
  tableRow: 'py-5 border-b border-gray-200 md:grid md:grid-cols-5 md:gap-6'
}
