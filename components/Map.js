import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import React from 'react';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <StoreMap />;
};

function StoreMap() {
  const center = useMemo(() => ({ lat: 50.9985, lng: -114.0733 }), []);
  return (
    <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} label="Maggies Diamond Boutique" />
    </GoogleMap>
  );
}

export default Map;
