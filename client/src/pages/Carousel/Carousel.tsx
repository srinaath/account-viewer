import React, { useState, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ImageView from '../../components/ImageView/ImageView'
import Arrow from '../../components/Arrow/Arrow'
import { ImageDirection } from '../../types/types'

import './Carousel.scss'

const imagesArr: string[] = ['static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png',
  'static/images/pepperoni.png',
  'static/images/taco.png'
]

export default function Carousel (): any {
  const [currentImageUrl, setUpdatedUrl]: any = useState(null)
  const [currentIndex, setUpdatedIndex]: any = useState(0)

  useEffect(() => {
    console.log('Updated')
  })

  const onCarouselImageChange: any = (direction: ImageDirection): void => {
    switch (direction) {
      case ImageDirection.Left:
        if (currentIndex > 0) {
          setUpdatedIndex((prevValue: number) => {
            prevValue --
            return prevValue
          })

        }
        break
      case ImageDirection.Right:
        if (currentIndex < imagesArr.length - 1) {
          setUpdatedIndex((prevValue: number) => {
            prevValue ++
            return prevValue
          })
        }
        break

      default:
        break
    }
    setUpdatedUrl(() => {
      return imagesArr[currentIndex]
    })
  }

  return (
    <div className="Carousel">
      <div className="d-flex align-items-center justify-content-center">
        <span>
          {currentIndex}
        </span>
        <Arrow direction={ImageDirection.Left} onImageChange={onCarouselImageChange}/>
        <ReactCSSTransitionGroup
        transitionName="carousel"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
          <ImageView url={currentImageUrl}/>
        </ReactCSSTransitionGroup>
        <Arrow direction={ImageDirection.Right} onImageChange={onCarouselImageChange}/>
      </div>
    </div>
  )
}
