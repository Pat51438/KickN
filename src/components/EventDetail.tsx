import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface EventDetailProps {
    eventId: string;
    onClose: () => void;
}

interface EventData {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: {
        address: string;
        lat: number;
        lng: number;
    };
    sport: string;
    organizer: {
        name: string;
        contact: string;
    };
    isPaid: boolean;
    price?: number;
}

const EventDetailContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const EventTitle = styled.h2`
  margin-top: 0;
`;

const EventDescription = styled.p`
  margin: 10px 0;
`;

const EventInfo = styled.div`
  margin: 10px 0;
`;

const EventDetail: React.FC<EventDetailProps> = ({ eventId, onClose }) => {
    const [event, setEvent] = useState<EventData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch event details from the backend (simulated here)
        const fetchEventDetails = async () => {
            try {
                // Replace this with your actual API call
                const data: EventData = await new Promise((resolve) =>
                    setTimeout(
                        () =>
                            resolve({
                                id: eventId,
                                title: 'Sample Event',
                                description: 'This is a sample event description.',
                                date: '2024-06-15',
                                time: '18:00',
                                location: {
                                    address: '123 Sample Street, Sample City',
                                    lat: 40.7128,
                                    lng: -74.006,
                                },
                                sport: 'Soccer',
                                organizer: {
                                    name: 'Organizer Name',
                                    contact: 'contact@example.com',
                                },
                                isPaid: true,
                                price: 20,
                            }),
                        1000
                    )
                );
                setEvent(data);
            } catch (error) {
                setError('Failed to fetch event details.');
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    if (loading) {
        return <EventDetailContainer>Loading...</EventDetailContainer>;
    }

    if (error) {
        return <EventDetailContainer>{error}</EventDetailContainer>;
    }

    return (
        <EventDetailContainer>
            <CloseButton onClick={onClose}>×</CloseButton>
    {event && (
        <>
            <EventTitle>{event.title}</EventTitle>
        <EventDescription>{event.description}</EventDescription>
        <EventInfo>
        <strong>Date:</strong> {event.date}
    </EventInfo>
    <EventInfo>
    <strong>Time:</strong> {event.time}
    </EventInfo>
    <EventInfo>
    <strong>Location:</strong> {event.location.address}
    </EventInfo>
    <EventInfo>
    <strong>Sport:</strong> {event.sport}
    </EventInfo>
    <EventInfo>
    <strong>Organizer:</strong> {event.organizer.name} ({event.organizer.contact})
    </EventInfo>
        {event.isPaid && (
            <EventInfo>
                <strong>Price:</strong> ${event.price?.toFixed(2)}
        </EventInfo>
        )}
        </>
    )}
    </EventDetailContainer>
);
};

export default EventDetail;
