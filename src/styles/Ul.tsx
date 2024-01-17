import {ReactElement} from 'react'

type Props = {
  children: ReactElement[]
}

export const Ul = (props: Props) => {
  const {children} = props

  return <ul className="list-disc list-inside">{children}</ul>
}
