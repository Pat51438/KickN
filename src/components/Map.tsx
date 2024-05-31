import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import Map from 'react-map-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja2M1MTQiLCJhIjoiY2x3aTlibWh3MDRxZTJscGszYnJoODI2ZSJ9.7abA_VeG2IHewqyfW7iAqw';



function MapApp() {
    return <Map
        mapLib={import('mapbox-gl')}
    initialViewState={{
        longitude: -100,
            latitude: 40,
            zoom: 3.5
    }}
    style={{width: '100%', height: '100vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
        />;
}

export default MapApp;