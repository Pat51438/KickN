// src/components/Map.tsx
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { DataStore } from '@aws-amplify/datastore';
import { Event, Location } from '../models';
import * as events from "events";

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja2M1MTQiLCJhIjoiY2x3aTlibWh3MDRxZTJscGszYnJoODI2ZSJ9.7abA_VeG2IHewqyfW7iAqw';

interface MapAppProps {
    events: Event[];
}

const MapApp: React.FC<MapAppProps> = ({ events }) => {
    const [viewport, setViewport] = useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
    });
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [eventLocations, setEventLocations] = useState<{ [key: string]: Location }>({});

    useEffect(() => {
        const fetchEventLocations = async () => {
            const locations = await Promise.all(
                events.map(async (event: Event) => {
                    const location = await DataStore.query(Location, event.locationID);
                    return { ...event, location };
                })
            );
            const locationMap = locations.reduce((acc: { [key: string]: Location }, curr) => {
                if (curr.location) {
                    acc[curr.id] = curr.location;
                }
                return acc;
            }, {});
            setEventLocations(locationMap);
        };
        fetchEventLocations();
    }, [events]);

    return (
        <Map
            mapLib={import('mapbox-gl')}
            initialViewState={viewport}
            style={{ width: '100vw', height: '100vh' }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            {events.map((event: Event) => {
                const location = eventLocations[event.id];
                if (!location) {
                    return null;
                }
                return (
                    <Marker
                        key={event.id}
                        longitude={parseFloat(String(location.longitude))}
                        latitude={parseFloat(String(location.latitude))}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedEvent(event);
                            }}
                        >
                            <img src="/pin.png" alt="Event Marker" />
                        </button>
                    </Marker>
                );
            })}
            {selectedEvent && eventLocations[selectedEvent.id] && (
                <Popup
                    longitude={parseFloat(String(eventLocations[selectedEvent.id].longitude))}
                    latitude={parseFloat(String(eventLocations[selectedEvent.id].latitude))}
                    onClose={() => setSelectedEvent(null)}
                >
                    <div>
                        <h3>{selectedEvent.activity}</h3>
                        <p>{selectedEvent.locationID}</p>
                        <p>{selectedEvent.date} {selectedEvent.time}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
};

export default MapApp;
