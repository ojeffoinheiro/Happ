import Leaflet from 'leaflet'

import market from '../img/local.svg';

const mapIcon = Leaflet.icon({
    iconUrl: market,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default mapIcon;