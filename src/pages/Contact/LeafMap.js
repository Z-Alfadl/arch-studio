import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";

export const LeafMap = () => {
    const [position, setPosition] = useState(null)
  const locationOne = [26.4417, 50.1857];
  const locationTwo = [25.038015, 55.117550];
  const LocationMarker = () => {
  const map = useMapEvents({
    click() {
        map.locate()
    },
    locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
    }
  });
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
      </Marker>
  )
}
  return (
    <MapContainer id="map" center={locationOne} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={locationOne}>
        <Popup>
          Office 1 <br /> Larger Location.
        </Popup>
      </Marker>
      <Marker position={locationTwo}>
        <Popup>
          Office 2 <br /> Fancier Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};
