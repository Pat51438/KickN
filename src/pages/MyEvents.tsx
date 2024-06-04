// src/pages/MyEvents.tsx
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_USER_EVENTS } from '../queries';

const MyEventsContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const EventCard = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

const MyEvents: React.FC = () => {
    // Remplacez 'userId' par l'ID de l'utilisateur actuel
    const userId = '1';

    const { loading, error, data } = useQuery(GET_USER_EVENTS, {
        variables: { userId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { events } = data.user;

    return (
        <MyEventsContainer>
            <h2>My Events</h2>
            {events.map((event: { id: string; activity: string; date: string; time: string; location: string }) => (
                <EventCard key={event.id}>
                    <h3>{event.activity}</h3>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                </EventCard>
            ))}
        </MyEventsContainer>
    );
};

export default MyEvents;
