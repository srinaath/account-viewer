import * as React from 'react'
import { Link } from 'react-router-dom'
import { ImageDirection } from '../../types/types'
import './Arrow.scss'

interface Props {
  direction: ImageDirection
  onImageChange: any
}

export default function Arrow ({ direction, onImageChange }: Props): any {
  const matchedClassName: string = 'Arrow__' + ImageDirection[direction]
  console.log(matchedClassName)
  return (
    <button className={matchedClassName} onClick={(): any => onImageChange(direction)}>
      {matchedClassName}
    </button>
  )
}
