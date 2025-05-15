import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};




function MyMap({results, cityCoordinates}) {


    const computedCoordinates = results? {
        lat: results.latitude,
        lng: results.longitude,
      }
    : cityCoordinates || { lat: 48.8566, lng: 2.3522 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAJceA8Aq3MHN6_83aLRsAHFTpIskl-4Ww">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={computedCoordinates}
        zoom={12}
      >
        {/* Tu peux ajouter ici des <Marker />, <InfoWindow />, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
