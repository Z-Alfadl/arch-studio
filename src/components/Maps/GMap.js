import { GoogleMap, MarkerF, AdvancedMarker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
const locationOne = { lat: 35.964444501002475, lng: -83.92014290990828 };
const locationTwo = { lat: 32.70533113620866, lng: -96.6384445594109 };
export const GMap = ({ center }) => {
  const [zoom, setZoom] = useState(6);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });
  useEffect(() => {
    const stringifiedCenter = JSON.stringify(center);
    const stringifiedLocationOne = JSON.stringify(locationOne);
    const stringifiedLocationTwo = JSON.stringify(locationTwo);
    if (
      stringifiedCenter === stringifiedLocationOne ||
      stringifiedCenter === stringifiedLocationTwo
    ) {
      setZoom(18);
    }
  }, [center]);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      options={{ gestureHandling: "greedy" }}
      
      mapContainerClassName="map-container"
    >
      <MarkerF
        onClick={() => console.log("my location")}
        position={locationOne}
      />
      <MarkerF
        onClick={() => console.log("my location")}
        position={locationTwo}
      />
    </GoogleMap>
  );
}


