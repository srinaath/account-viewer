import * as React from 'react'
import './MapsViewer.scss'
import mapsLoader, { addMarker, codeAddress } from '../../lib/mapsLoader'

interface Props {
  address: string
}

class MapsViewer extends React.Component<Props> {
  constructor (props: Props) {
    super(props)
  }

  public static getDerivedStateFromProps (props: any): void {
    if (props.address) {
      codeAddress(props.address)
    }
  }

  public componentDidMount (): void {
    mapsLoader()
  }

  public render (): any {
    return (
      <div id="map" className="MapsViewer__map"></div>
    )
  }
}

export default MapsViewer
