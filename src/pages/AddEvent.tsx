// src/pages/AddEvent.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { DataStore } from '@aws-amplify/datastore';
import { Event, Location } from '../models';

const AddEventContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
`;

const Select = styled.select`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

interface EventData {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    sport: string;
    isPaid: boolean;
    price?: number;
}

const sportsCategories = {
    team: ['Hockey', 'Soccer', 'Football', 'Basketball', 'Baseball'],
    combat: ['Boxing', 'Karate', 'Judo', 'Taekwondo', 'Wrestling', 'MMA'],
    racket: ['Tennis', 'Ping Pong', 'Badminton', 'Squash'],
    social: ['Bowling', 'Pool', 'Darts'],
    shooting: ['Paintball', 'Laser Tag', 'Airsoft'],
};

const AddEvent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [eventData, setEventData] = useState<EventData>({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        sport: '',
        isPaid: false,
        price: undefined,
    });

    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof sportsCategories | ''>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setEventData({ ...eventData, [name]: checked });
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value as keyof typeof sportsCategories);
        setEventData({ ...eventData, sport: '' });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!eventData.title || !eventData.date || !eventData.time || !eventData.location || !eventData.sport) {
            setError('Please fill out all required fields.');
            return;
        }
        if (eventData.isPaid && (eventData.price === undefined || eventData.price <= 0)) {
            setError('Please provide a valid price for paid events.');
            return;
        }
        setError(null);

        try {
            // Save the location first (vous devrez ajuster ceci selon vos besoins)
            const location = await DataStore.save(
                new Location({
                    // Vous devrez déterminer comment obtenir les coordonnées à partir de l'adresse
                    latitude: 0, // Placeholder
                    longitude: 0, // Placeholder
                })
            );

            // Then save the event with the location ID
            await DataStore.save(
                new Event({
                    activity: eventData.sport,
                    locationID: location.id,
                    date: eventData.date,
                    time: eventData.time,
                    userEventsId: 'user-id-placeholder', // Remplacez par l'ID utilisateur approprié
                })
            );

            setEventData({
                title: '',
                description: '',
                date: '',
                time: '',
                location: '',
                sport: '',
                isPaid: false,
                price: undefined,
            });

            alert('Event added successfully!');
            onClose();
        } catch (error) {
            if (error instanceof Error) {
                setError('Error adding event: ' + error.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    return (
        <AddEventContainer>
    
            <h2>Add New Event</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    value={eventData.title}
                    onChange={handleChange}
                    required
                />
                <TextArea
                    name="description"
                    placeholder="Event Description"
                    value={eventData.description}
                    onChange={handleChange}
                />
                <Input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="time"
                    name="time"
                    value={eventData.time}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="location"
                    placeholder="Event Location"
                    value={eventData.location}
                    onChange={handleChange}
                    required
                />
                {/* Les champs de latitude et longitude ont été supprimés */}
                <Select value={selectedCategory} onChange={handleCategoryChange} required>
                    <option value="">Select Sport Category</option>
                    <option value="team">Team Sports</option>
                    <option value="combat">Combat Sports</option>
                    <option value="racket">Racket Sports</option>
                    <option value="social">Social Sports</option>
                    <option value="shooting">Shooting Sports</option>
                </Select>

                {selectedCategory && (
                    <Select name="sport" value={eventData.sport} onChange={handleChange} required>
                        <option value="">Select Sport</option>
                        {sportsCategories[selectedCategory].map((sport) => (
                            <option key={sport} value={sport}>{sport}</option>
                        ))}
                    </Select>
                )}

                <CheckboxLabel>
                    <Checkbox
                        type="checkbox"
                        name="isPaid"
                        checked={eventData.isPaid}
                        onChange={handleCheckboxChange}
                    />
                    Is this a paid event?
                </CheckboxLabel>
                {eventData.isPaid && (
                    <Input
                        type="number"
                        name="price"
                        placeholder="Event Price"
                        value={eventData.price}
                        onChange={handleChange}
                    />
                )}
                <Button type="submit">Add Event</Button>
            </form>
        </AddEventContainer>
    );
};

export default AddEvent;