// src/components/Map.tsx
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { DataStore } from '@aws-amplify/datastore';
import { Event, Location } from '../models';
import { SearchResult } from '../types/interfaces/SearchResult'; // Add this import

import styled from 'styled-components';

const SmallPin = styled.button`
    width: 45px;
    background: transparent;
    border: none;
    padding: 0;

    img {
        width: 100%;
        height: 100%;
    }
`;


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || '';

interface MapAppProps {
    events: Event[];
    selectedEvent: Event | null;
    setSelectedEvent: (event: Event | null) => void;
    viewport: {
        longitude: number;
        latitude: number;
        zoom: number;
    };
    setViewport: (viewport: { longitude: number; latitude: number; zoom: number }) => void;
    searchResult: SearchResult | null;
}

const MapApp: React.FC<MapAppProps> = ({ events, selectedEvent, setSelectedEvent, viewport, setViewport, searchResult }) => {
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
                        <SmallPin
                            onClick={e => {
                                e.preventDefault();
                                setSelectedEvent(event);
                            }}
                        >
                            <img src="/pin.png" alt="Event Marker" />
                        </SmallPin>
                    </Marker>
                );
            })}
            {searchResult && (
                <Marker
                    longitude={searchResult.longitude}
                    latitude={searchResult.latitude}
                >
                    <SmallPin
                        onClick={(e) => {
                            e.preventDefault();
                            // Vous pouvez ajouter une action ici si nécessaire
                        }}
                    >
                        <img src="/pin.png" alt="Search Result" />
                    </SmallPin>
                </Marker>
            )}
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
}

export default MapApp;
