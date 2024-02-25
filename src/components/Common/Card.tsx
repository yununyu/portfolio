import React, { FC } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { Description, Subheading } from '../../styles/index'
import DoTLogo from '../../assets/DoTLogo.png'
import github from '../../assets/github.png'

type CardProps = {
  content: string
}
export const Cards: FC<CardProps> = ({ content }) => {
  function toGit() {
    window.location.href = 'https://github.com/yununyu/DoT'
  }

  function toSite() {
    window.location.href = 'http://dot-client.s3-website.ap-northeast-2.amazonaws.com '
  }
  return (
    <div>
      <Card className="w-full h-full md:w-1/2 lg:w-2/3 xl:w-3/4 mb-10">
        <CardImg src={DoTLogo} alt="Card image" />
        <CardBody className="d-flex flex-column align-items-center">
          <Description text={content}></Description>
          <div className='flex-row'>
            <Button onClick={toGit} className='mr-10'>
              <img src={github} alt="To GitHub" className="h-6 w-7" />
            </Button>
            <Button onClick={toSite}>
              <img src={DoTLogo} alt="To Site" className="h-6 w-7" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
