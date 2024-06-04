// src/pages/Messaging.tsx
import React from 'react';
import styled from 'styled-components';
import { WeavyComponent } from '../components/Messenger';

const MessagingContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Messaging: React.FC = () => {
    return (
        <MessagingContainer>
            <h2>Messaging</h2>
            <WeavyComponent />
        </MessagingContainer>
    );
};

export default Messaging;
