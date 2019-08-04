let map: any
let currentMarker: any

export function codeAddress (address: string): void {
  const geocoder: any = new google.maps.Geocoder()
  geocoder.geocode({
    'address': address
  }, (results: any, status: any) => {
    if (status === google.maps.GeocoderStatus.OK) {
      map.panTo(results[0].geometry.location)
      currentMarker.setMap(null)
      currentMarker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      })
    }
  })
}

(window as any).initMap = function (): void {
  const temp: any = { lat: 36.778259, lng: -119.417931 }
  map = new google.maps.Map(
      document.getElementById('map'), { zoom: 8, center: temp })
  currentMarker = new google.maps.Marker({ position: temp, map: map })
}

export default function (): void {
  const googleMapsScript: HTMLElement = document.createElement('script')
  googleMapsScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&callback=initMap`)
  googleMapsScript.setAttribute('async', '')
  googleMapsScript.setAttribute('defer', '')
  document.body.appendChild(googleMapsScript)
}

export function addMarker (coords: number[]): void {
  map.panTo({
    lat: coords[0],
    lng: coords[1]
  })
}
