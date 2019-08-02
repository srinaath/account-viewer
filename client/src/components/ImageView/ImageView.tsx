import React from 'react'

interface Props {
  url: string
}

export default function ImageView ({ url }: Props): any {
  console.log(url)
  return <img src={url} alt="Image" className="ImageView"/>
}
