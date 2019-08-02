import React, { useRef, useEffect, RefObject, useState } from 'react'
import './CustomImageLoader.scss'

interface Props {
  url: string
}

export default function CustomImageLoader ({ url }: Props): any {
  const imageElement: RefObject<HTMLImageElement> = useRef(null)
  const [inView, setIsInView]: any = useState(null)

  useEffect(() => {
    setIsInView(() => isInView())
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll: any = (): void => {
    setIsInView(() => isInView())
  }

  const isInView: any = (): boolean => {
    if (imageElement.current) {
      const rect: ClientRect = imageElement.current.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= window.innerHeight
    }
    return false
  }

  return <img src={url} alt="Image" ref={imageElement} className={!inView ? 'CustomImageLoader--secondary' : ''}/>

}
