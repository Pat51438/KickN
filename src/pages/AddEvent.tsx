import React, { useState } from 'react';
import styled from 'styled-components';

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

const CloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setEventData({ ...eventData, [name]: checked });
    };

    const handleSubmit = (e: React.FormEvent) => {
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

        // Normally, you would send the data to the backend here

        // Reset form after successful submission
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
    };

    return (
        <AddEventContainer>
            <CloseButton onClick={onClose}>×</CloseButton>
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
        <Select name="sport" value={eventData.sport} onChange={handleChange} required>
    <option value="">Select Sport</option>
    <option value="hockey">Hockey</option>
        <option value="soccer">Soccer</option>
        <option value="basketball">Basketball</option>
        <option value="boxing">Boxing</option>
        <option value="karate">Karate</option>
        <option value="tennis">Tennis</option>
        <option value="ping pong">Ping Pong</option>
    <option value="bowling">Bowling</option>
        <option value="pool">Pool</option>
        <option value="darts">Darts</option>
        <option value="paintball">Paintball</option>
        <option value="laser tag">Laser Tag</option>
    <option value="airsoft">Airsoft</option>
        <option value="other">Other</option>
    </Select>
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
