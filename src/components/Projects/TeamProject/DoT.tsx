import React from 'react'
import {Title, Subheading} from '../../../styles/index'
import {Cards} from '../../index'

export const DoT = () => {
  return (
    <div>
      <Title text="PROJECTS"></Title>
      <div className="grid grid-cols-1 m-10 lg:grid-cols-3">
        <Cards content="여행 플래너 및 정보공유 게시판" />
      </div>
    </div>
  )
}
