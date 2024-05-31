import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #0056b3;
  }
`;

const Settings: React.FC = () => {
    return (
        <SettingsContainer>
            <Title>Settings</Title>
        <Button>Profile</Button>
        <Button>Privacy</Button>
        <Button>Notifications</Button>
        <Button>Account</Button>
        <Button>Security</Button>
        <Button>Language</Button>
        <Button>Help & Support</Button>
        <Button>About</Button>
        <Button>Log Out</Button>
    </SettingsContainer>
);
};

export default Settings;
