import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type MyGoogleMapProps = {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MyGoogleMap: React.FC<MyGoogleMapProps> = ({ apiKey, center, zoom = 10 }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {/* Example: Add a marker at the center */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyGoogleMap;
