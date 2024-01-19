import React, {FC} from 'react'
import {ReactElement} from 'react'

type TextProps = {
  text: string
}
type Props = {
  children: ReactElement[]
}

export const Title: FC<TextProps> = ({text}) => {
  return <p className="text-2xl font-bold tracking-wide text-[#609966]">{text}</p>
}

export const Subheading: FC<TextProps> = ({text}) => {
  return <span className="m-2 font-bold text-[#8EB682] text-base">{text}</span>
}

export const Description: FC<TextProps> = ({text}) => {
  return <span className="my-6 font-serif text-xs text-gray-600">{text}</span>
}

export const PS: FC<TextProps> = ({text}) => {
  const index = text.indexOf('임윤서')
  const index2 = text.indexOf('""')

  return (
    <p className="font-serif text-xs font-medium text-gray-600 hover:font-bold">
      {index !== -1 ? ( // 이름 키워드를 포함한 인덱스만 substring 적용
        <>
          <span>{text.substring(0, index)}</span>
          <span className="mr-1 text-base font-bold">임윤서</span>
          <span>{text.substring(index + 3)}</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </p>
  )
}

export const Date: FC<TextProps> = ({text}) => {
  return <span className="ml-2 font-serif text-xs text-gray-500">{text}</span>
}

export const Ul = (props: Props) => {
  const {children} = props

  return <ul className="list-inside">{children}</ul>
}

export const commonStyles = {
  tableRow: 'py-5 border-b border-gray-200 md:grid md:grid-cols-5 md:gap-6'
}
