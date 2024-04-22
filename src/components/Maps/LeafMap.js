import { MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";

function SetViewOnClick({ coords }) {
  const map = useMap();
  if (coords[0] === 34.307826092925396) return null;
  map.setView(coords, 16);

  return null;
}
export const LeafMap = ({center}) => {

    
    const locationOne = [35.964444501002475, -83.92014290990828] ;
    const locationTwo = [32.70533113620866, -96.6384445594109] ;
   
    return (
      <MapContainer center={center} zoom={5} scrollWheelZoom={false} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <button className="view-on-map" value="35.964444501002475, -83.92014290990828" />
      <Marker position={locationOne}>
        <Popup>
          Main Office <br /> 435 Union Ave, Knoxville Tennessee
        </Popup>
      </Marker>
      <Marker position={locationTwo}>
        <Popup>
          Office II <br /> 10901 Seagoville Rd TX
        </Popup>
      </Marker>
      <SetViewOnClick coords={center} />
    </MapContainer>
    );
  
};
