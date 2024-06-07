import React, { useState } from 'react';
import styled from 'styled-components';
import AddEvent from "./pages/AddEvent";
import EventDetail from './context/EventDetail';
import Messaging from './pages/Messaging';
import Filters from './pages/Filters';
import SearchBar from './components/SearchBar';
import Profile from './pages/Profile';
import MyEvents from './pages/MyEvents';
import MapApp from './components/Map';
import Settings from './pages/Settings';
import Modal from './components/Modal';
import { Amplify } from 'aws-amplify';
import awsExports from './amplifyconfiguration.json';
Amplify.configure(awsExports);


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  position: fixed;
  left: 10px;
  top: 60px;
  z-index: 2; 
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: white; /* Ajoutez un fond pour s'assurer que le contenu en dessous n'est pas visible */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 60px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App: React.FC = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [isMyEventsVisible, setIsMyEventsVisible] = useState(false);
  const [isMessagingVisible, setIsMessagingVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const openProfile = () => {
    setIsProfileVisible(true);
  };

  const closeProfile = () => {
    setIsProfileVisible(false);
  };

  const openAddEventForm = () => {
    setIsAddingEvent(true);
  };

  const closeAddEventForm = () => {
    setIsAddingEvent(false);
  };

  const openEventDetail = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const closeEventDetail = () => {
    setSelectedEventId(null);
  };

  const openFilters = () => {
    setAreFiltersVisible(true);
  };

  const closeFilters = () => {
    setAreFiltersVisible(false);
  };

  const openMyEvents = () => {
    setIsMyEventsVisible(true);
  };

  const closeMyEvents = () => {
    setIsMyEventsVisible(false);
  };

  const openMessaging = () => {
    setIsMessagingVisible(true);
  };

  const closeMessaging = () => {
    setIsMessagingVisible(false);
  };

  const openSettings = () => {
    setIsSettingsVisible(true);
  };

  const closeSettings = () => {
    setIsSettingsVisible(false);
  };

  return (
      <>
        <MapApp />
        <AppContainer>
          <TopBar>
            <SearchBar />
          </TopBar>
          <Buttons>
            <Button onClick={openProfile}>Profile</Button>
            <Button onClick={openAddEventForm}>Add Event</Button>
            <Button onClick={openMyEvents}>My Events</Button>
            <Button onClick={openFilters}>Event Filters</Button>
            <Button onClick={openMessaging}>Messaging</Button>
            <Button onClick={openSettings}>Settings</Button>
          </Buttons>
          <Content>
            {isAddingEvent && <AddEvent onClose={closeAddEventForm} />}
            {selectedEventId && <EventDetail eventId={selectedEventId} onClose={closeEventDetail} />}
          </Content>
          <Modal show={isProfileVisible} onClose={closeProfile}>
            <Profile />
          </Modal>
          <Modal show={isAddingEvent} onClose={closeAddEventForm}>
            <AddEvent onClose={closeAddEventForm} />
          </Modal>
          <Modal show={areFiltersVisible} onClose={closeFilters}>
            <Filters />
          </Modal>
          <Modal show={isMyEventsVisible} onClose={closeMyEvents}>
            <MyEvents />
          </Modal>
          <Modal show={isMessagingVisible} onClose={closeMessaging}>
            <Messaging />
          </Modal>
          <Modal show={isSettingsVisible} onClose={closeSettings}>
            <Settings />
          </Modal>
        </AppContainer>
      </>
  );
};

export default App;
