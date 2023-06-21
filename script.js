mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJpc3RvdGxlNTYiLCJhIjoiY2xkeTdrbmZoMDEzaDNwbXZ6ajViNDUycCJ9.R3_AFGQoZ1oBy4Xnjwqwkg'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation (position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation () {
  setupMap([-2, 24, 53.48])
}

function setupMap (center) {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: center, // starting position [lng, lat]
    zoom: 13 // starting zoom
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  const directions = new MapboxDirections({
    accessToken:
      'pk.eyJ1IjoiYXJpc3RvdGxlNTYiLCJhIjoiY2xkeTdrbmZoMDEzaDNwbXZ6ajViNDUycCJ9.R3_AFGQoZ1oBy4Xnjwqwkg'
  })

  map.addControl(directions)
}
