import React, { useRef, LegacyRef } from 'react'
import CustomImageLoader from '../../components/CustomImageLoader/CustomImageLoader'
import './PdpCustomizer.scss'

const imagesArr: string[] = ['static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png',
  'static/images/pepperoni.png'
]

export default function PdpCustomizer (): any {
  const inputEl: LegacyRef<HTMLInputElement> = useRef(null)
  const onButtonClick: any = (): void => {
    inputEl.current.value = 'hi'
  }
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      {
        imagesArr.map((image: string) => (
          <div className="d-flex align-items-center justify-content-center">
            <CustomImageLoader url={image}/>
          </div>
        ))
      }
    </div>
  )
}
