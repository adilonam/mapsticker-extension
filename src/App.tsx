


import { useEffect, useState } from 'react';
import './App.css'
import MyGoogleMap from './components/MyGoogleMap'

function App() {
  const mapCenter = { lat: -3.745, lng: -38.523 };


    
  return (
    <>
     <h1>My Google Map</h1>
     <div>
    </div>
     <MyGoogleMap apiKey="AIzaSyDqhaiXZKWzP-AEe2GJrOetGdMyDk9ENBc" center={mapCenter} zoom={10} />
    </>
  )
}

export default App
