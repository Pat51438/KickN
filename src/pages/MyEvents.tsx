import React from 'react';
import styled from 'styled-components';

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
    const events = [
        { id: 1, title: 'Soccer Match', date: '2024-06-01', time: '18:00' },
        { id: 2, title: 'Basketball Game', date: '2024-06-10', time: '20:00' },
        // Add more events as needed
    ];

    return (
        <MyEventsContainer>
            <h2>My Events</h2>
    {events.map(event => (
        <EventCard key={event.id}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
    <p>Time: {event.time}</p>
    </EventCard>
    ))}
    </MyEventsContainer>
);
};

export default MyEvents;
