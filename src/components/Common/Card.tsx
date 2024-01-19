import React, {FC} from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import {Description, Subheading} from '../../styles/index'
import DoTLogo from '../../assets/DoTLogo.png'
import github from '../../assets/github.png'

type CardProps = {
  content: string
}
export const Cards: FC<CardProps> = ({content}) => {
  function toGit() {
    window.location.href = 'https://github.com/your-username/your-repo' //todo - gitRepo 만들어서 여기 업데이트 필요
  }
  return (
    <div>
      <Card className="w-full h-full md:w-1/2 lg:w-2/3 xl:w-3/4">
        <CardImg src={DoTLogo} alt="Card image" />
        <CardBody className="d-flex flex-column align-items-center">
          <Description text={content}></Description>
          <Button onClick={toGit}>
            <img src={github} alt="To GitHub" className="h-6 w-7" />
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
